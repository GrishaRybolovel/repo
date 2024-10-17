import os
import pandas as pd
from datetime import datetime, timezone, timedelta
from dateutil.relativedelta import relativedelta
import scrapetube
import uuid
import zipfile
import asyncio
from concurrent.futures import ThreadPoolExecutor

from .generate import process_table
from .models import CompletionModel

executor = ThreadPoolExecutor(max_workers=4)


async def get_video_data(video, completionQuery=None):
    video_id = video['videoId']
    title = video['title']['runs'][0]['text']
    video_url = f"https://www.youtube.com/watch?v={video_id}"
    channel_title = video['ownerText']['runs'][0]['text']
    channel_url = f"https://www.youtube.com{video['ownerText']['runs'][0]['navigationEndpoint']['commandMetadata']['webCommandMetadata']['url']}"
    views = int(video['viewCountText']['simpleText'].replace(' views', '').replace(',', ''))
    published_date = video['publishedTimeText']['simpleText'].replace('Streamed ', "")
    return [title, video_url, channel_title, channel_url, views, published_date]


async def get_videos(keyword, completion: CompletionModel, limit=400):
    completionQuery = completion.query
    videos = scrapetube.get_search(query=keyword, limit=limit)
    tasks = [get_video_data(video, completionQuery) for video in videos if video is not None]
    results = await asyncio.gather(*tasks, return_exceptions=True)
    return [result for result in results if not isinstance(result, Exception)]


def days_since_published(published_date):
    now = datetime.now(timezone.utc)

    if "year" in published_date:
        delta_years = int(published_date.split(" ")[0])
        published_date = now - relativedelta(years=delta_years)
    elif "month" in published_date:
        delta_months = int(published_date.split(" ")[0])
        published_date = now - relativedelta(months=delta_months)
    elif "week" in published_date:
        delta_weeks = int(published_date.split(" ")[0])
        published_date = now - timedelta(weeks=delta_weeks)
    elif "day" in published_date:
        delta_days = int(published_date.split(" ")[0])
        published_date = now - timedelta(days=delta_days)
    else:
        # Если формат не распознан, считаем, что дата - это сегодняшняя дата
        published_date = now

    delta = now - published_date
    return delta.days


def process_data(videos):
    data = []
    for video in videos:
        if video is None:  # Check if video is None
            continue
        days = days_since_published(video[5])
        views_per_day = video[4] / days if days > 0 else video[4]
        if days <= 7 and video[4] >= 5000:
            data.append(video + [views_per_day, days])
        elif 7 < days <= 31 and video[4] >= 30000:
            data.append(video + [views_per_day, days])
        elif 31 < days and video[4] >= 100000:
            data.append(video + [views_per_day, days])

    df = pd.DataFrame(data, columns=[
        'Название', 'URL Видео', 'Канал', 'URL Канала', 'Просмотры', 'Дата публикации', 'Просмотры в день',
        'Дней с Публикации'
    ])
    return df


def segment_data(df):
    df['Дней с Публикации'] = pd.to_numeric(df['Дней с Публикации'], errors='coerce')

    # Convert to integers, handling NaNs by filling with a default value (e.g., 0)
    df['Дней с Публикации'] = df['Дней с Публикации'].fillna(0).astype(int)

    week_videos = df[df['Дней с Публикации'] <= 7]
    month_videos = df[(df['Дней с Публикации'] <= 30) & (df['Дней с Публикации'] > 7)]
    year_videos = df[(df['Дней с Публикации'] <= 365) & (df['Дней с Публикации'] > 30)]

    return week_videos, month_videos, year_videos


def save_consolidated_excel(keyword, consolidated_data):
    file_path = f"temp_{keyword}.xlsx"
    with pd.ExcelWriter(file_path, engine='xlsxwriter') as writer:
        for period_name, data in consolidated_data.items():
            data.drop_duplicates(subset=['URL Видео'], inplace=True)
            # Убираем ненужные столбцы перед сохранением
            data = data[
                ['Название', 'URL Видео', 'Канал', 'URL Канала', 'Просмотры', 'Дата публикации', 'Дней с Публикации']]
            data.to_excel(writer, sheet_name=period_name, index=False)

            # Formatting
            workbook = writer.book
            worksheet = writer.sheets[period_name]
            for idx, col in enumerate(data.columns):
                worksheet.set_column(idx, idx, 20)
            worksheet.set_row(0, None, workbook.add_format({'bold': True}))

    return file_path


async def generate_analytics_data(keywords, completion: CompletionModel, task):
    all_data = []
    cnt = 1
    progress = len(keywords) + 1

    for keyword in keywords:
        videos = await get_videos(keyword, completion)
        task.update_state(state='PROGRESS', meta={"current_keyword": str(cnt / progress * 100)[:2]})
        cnt += 1
        if videos:
            df = process_data(videos)
            all_data.append(df)

    if all_data:
        combined_df = pd.concat(all_data, ignore_index=True)

        week_videos, month_videos, year_videos = segment_data(combined_df)

        titles_week_str = "\n".join([f"{i}. {title}" for i, title in enumerate(week_videos['Название'], start=0)])
        indexes = [i for i, title in enumerate(week_videos['Название'], start=0)]
        irrelevant_rows = await process_table(titles_week_str, completion.query, indexes)
        week_videos.reset_index(drop=True, inplace=True)
        relevant_week = week_videos.drop(irrelevant_rows, errors='ignore')

        titles_month_str = "\n".join([f"{i}. {title}" for i, title in enumerate(month_videos['Название'], start=0)])
        indexes = [i for i, title in enumerate(month_videos['Название'], start=0)]
        irrelevant_rows = await process_table(titles_month_str, completion.query, indexes)
        month_videos.reset_index(drop=True, inplace=True)
        relevant_month = month_videos.drop(irrelevant_rows, errors='ignore')

        titles_year_str = "\n".join([f"{i}. {title}" for i, title in enumerate(year_videos['Название'], start=0)])
        indexes = [i for i, title in enumerate(year_videos['Название'], start=0)]
        irrelevant_rows = await process_table(titles_year_str, completion.query, indexes)
        year_videos.reset_index(drop=True, inplace=True)
        relevant_year = year_videos.drop(irrelevant_rows, errors='ignore')

        consolidated_data = {
            'Week': relevant_week.sort_values('Просмотры в день', ascending=False).head(300),
            'Month': relevant_month.sort_values('Просмотры в день', ascending=False).head(300),
            'Year': relevant_year.sort_values('Просмотры в день', ascending=False).head(300)
        }

        average_views = [
            {
                "average_week": int(consolidated_data['Week']['Просмотры'].mean()),
                "average_month": int(consolidated_data['Month']['Просмотры'].mean()),
                "average_year": int(consolidated_data['Year']['Просмотры'].mean()),
            },
        ]

        output_dir = "/app/output"
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        zip_filename = os.path.join(output_dir, f"tmp_{uuid.uuid4()}.zip")
        excel_file_path = save_consolidated_excel('consolidated', consolidated_data)

        with zipfile.ZipFile(zip_filename, 'w') as zipf:
            zipf.write(excel_file_path, os.path.basename(excel_file_path))
            os.remove(excel_file_path)

        task.update_state(state='PROGRESS', meta={"current_keyword": str(cnt / progress * 100)[:2]})

        relevant_videos = ""
        for index, row in relevant_week.iterrows():
            if index <= 20:
                relevant_videos += f"{index + 1}. Title: {row['Название']}, URL: {row['URL Видео']}, Views: {row['Просмотры']}, Days since publishing: {row['Дней с Публикации']}\n"
        for index, row in relevant_month.iterrows():
            if index <= 20:
                relevant_videos += f"{index + 1}. Title: {row['Название']}, URL: {row['URL Видео']}, Views: {row['Просмотры']}, Days since publishing: {row['Дней с Публикации']}\n"
        for index, row in relevant_year.iterrows():
            if index <= 20:
                relevant_videos += f"{index + 1}. Title: {row['Название']}, URL: {row['URL Видео']}, Views: {row['Просмотры']}, Days since publishing: {row['Дней с Публикации']}\n"

        return zip_filename, relevant_videos, average_views
    return None


if __name__ == '__main__':
    import asyncio

    keywords = "1. How\n2. Tips\n3. Secrets\n4. Tricks\n5. Learn\n6. Guide\n7. Review\n8. Explore\n9. Adventure\n10. Travel\n11. Fitness\n12. Workout\n13. Diet\n14. Health\n15. Food\n16. Lifestyle\n17. Ideas\n18. Hacks\n19. Motivation\n20. Success\n21. Skills\n22. Trends\n23. DIY\n24. Business\n25. Finance\n26. Marketing\n27. Relationships\n28. Love\n29. Style\n30. Fashion\n31. Creativity\n32. Inspiration\n33. Challenge\n34. Fun\n35. Comparison\n36. Best\n37. Must-see\n38. Popular\n39. Tips\n40. Insights\n41. Resources\n42. Secrets\n43. Techniques\n44. Discover\n45. Trends\n46. Favorites\n47. Essentials\n48. Solutions\n49. Basics\n50. Projects"
    keywords_list = keywords.split('\n')
    asyncio.run(generate_analytics_data(keywords_list))
