import json

from openai import AsyncOpenAI
from .models import ResponseModel, CompletionModel
import pandas as pd
import asyncio
import os
import re

client = AsyncOpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
    base_url="https://grisharybolovlev-oai-proxy.hf.space/proxy/openai/v1"
)

def is_json(data):
    try:
        json.loads(data)
        return True
    except ValueError:
        return False


async def generate_shorts_completion(request: str) -> ResponseModel:
    prompt = f"Describe 3 scenarios for short videos for YouTube Shorts on the topic {request} :: specifying the location, storyboard with number of seconds :: Full text, video description with a call to action. The response should be in the language in which the topic is provided. When creating the script, you can use one of the methods listed below: 1. The “slippery slope” method 2. The “curtain twitch” technique 3. The “red herring” technique 4. The “inner conflict” method 5. The “hook” technique"
    completion = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    return ResponseModel(result=completion.choices[0].message.content)


async def generate_video_completion(request: str) -> ResponseModel:
    prompt = f'Outline a video script for YouTube lasting 15-20 minutes on the topic {request} :: Use language of the topic specifying the location, detailed storyboard with number of seconds, appearance of the presenter :: Write the full text for each storyboard interval, which the presenter will say, ending the video with a call to action :: Then provide recommendations on what to pay attention to during filming. The response should be in the language of the provided topic. When creating the script, you can use one of the methods listed below: 1. The "slippery slope" method 2. The "curtain twitch" technique 3. The "red herring" technique 4. The "inner conflict" method 5. The "hook" technique.'
    completion = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    return ResponseModel(result=completion.choices[0].message.content)


async def generate_seo_completion(request: str) -> ResponseModel:
    prompt_language = f'Provide me the language of this text: "{request[:25000]}". Give only one word with the language'

    completion_language = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt_language}]
    )
    lang = completion_language.choices[0].message.content

    prompt_ideas = f'The text of the popular video is: "{request[:25000]}". Based on the above text from the video, take the following steps :: Create seo optimization for a YouTube video based on the assignment below: Come up with a title for the YouTube video. Number of words in the title from 5 to 10(minimum 50 symbols and maximum 100 symbols). Give me 7 ideas. I JUST NEED ONLY THE IDEAS ON THE {lang} language, JUST THE TEXT, NO EXTRA DATA AND SYMBOLS!'

    prompt_description = f'The text of the popular video is: "{request[:25000]}". Based on the above text from the video, take the following steps :: Create seo optimization for a YouTube video based on the assignment below: Come up with a description for a YouTube video :: The description should consist of 3 paragraphs, the first one should reflect the content and contain keywords for search engine optimization. The number of sentences from 10 to 15. The second tells about the video and also contains keywords for seo, the number of sentences from 12 to 15. The third paragraph should tell about the channel, the number of sentences from 14 to 18. I JUST NEED ONLY THE DESCRIPTION ON THE {lang} language, NO EXTRA TEXT!'

    prompt_hashtags = f'The text of the popular video is: "{request[:25000]}". Based on the above text from the video, take the following steps :: Create seo optimization for a YouTube video based on the assignment below: Come up with 5 hashtags on the topic of the video, each hashtag - 1 word in lowercase. GIVE ME JUST 5 HASHTAGS IN ONE LINE IN LOWERCASE ON THE {lang} language!'

    prompt_tags = f'The text of the popular video is: "{request[:25000]}". Based on the above text from the video, take the following steps :: Create seo optimization for a YouTube video based on the assignment below: Come up with 30 tags for YouTube videos and list them in commas (symbols amount must be between 400 and 500) :: Phrases can contain from 1 to 3 words. Use simple words that can be found by other authors under videos in such and related topics. Also use the queries that people leave in the search engine. These should be frequent and extensive requests, not narrow formulations. Some tags may start with the word “like”, present the tags in a single list separated by a comma. I JUST NEED ONLY THE TAGS ON THE {lang} language, NO EXTRA TEXT!'

    completion_ideas = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt_ideas}]
    )

    completion_description = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt_description}]
    )

    completion_hashtags = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt_hashtags}]
    )

    completion_tags = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt_tags}]
    )

    result_completion = (
            str(completion_ideas.choices[0].message.content) + '::::' +
            str(completion_description.choices[0].message.content) + '::::' +
            str(completion_hashtags.choices[0].message.content) + '::::' +
            str(completion_tags.choices[0].message.content)
    )
    return ResponseModel(result=result_completion)

async def fetch_completion(client, prompt, retries=3, delay=5):
    for attempt in range(1, retries + 1):
        try:
            completion = await client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role": "user", "content": prompt}]
            )
            return completion
        except Exception as e:
            print(f"Attempt {attempt} failed with error: {e}")
            if attempt < retries:
                print(f"Retrying in {delay} seconds...")
                await asyncio.sleep(delay)
            else:
                print("Max retries reached. Request failed.")
                return None


async def generate_analytics_completion(request: str) -> ResponseModel:
    # prompt = f"Сейчас я отправлю тебе определённый набор информации о моем канале на YouTube и по нему нам нужно будет выполнить серию заданий\n\n{request}\n\nДля начала - мне важно понять к каким категориям контента можно вообще отнести мой канал - какие это ниши? какие есть конкуренты в этой теме? с кем мне нужно будет конкурировать за просмотры"
    # messages = [{"role": "user", "content": prompt}]
    #
    # # Получение первой части ответа
    # completion = await client.chat.completions.create(
    #     model="gpt-4o-mini",
    #     messages=messages
    # )
    #
    # # Обработка первого ответа
    # messages.append({"role": "assistant", "content": completion.choices[0].message.content})
    #
    # # Второй запрос: портрет целевого зрителя
    # new_prompt = "На основе того что мы разработали выше - помоги мне составить портрет целевого зрителя - я и его интересы - какие у него потребности и желания что ему хочется иметь в своей жизни какой контент он любит смотреть и вообще как нам сделать так чтобы зрители смотрели наши видео а не видео конкурентов"
    # messages.append({"role": "user", "content": new_prompt})
    #
    # completion = await client.chat.completions.create(
    #     model="gpt-4o-mini",
    #     messages=messages
    # )
    #
    # messages.append({"role": "assistant", "content": completion.choices[0].message.content})
    #
    # # Третий запрос: ключевые слова
    # new_prompt = "Хорошо теперь на основе всех данных мне необходимо подготовить 300 ключевых слов которые могут содержаться в названиях видео конкурентов - важно чтобы это были не просто слова по тематике а конкретные слова которые есть в названиях тех видео которое может интересно описанному выше целевому зрителю"
    # messages.append({"role": "user", "content": new_prompt})
    #
    # completion = await client.chat.completions.create(
    #     model="gpt-4o-mini",
    #     messages=messages
    # )
    #
    # messages.append({"role": "assistant", "content": completion.choices[0].message.content})
    #
    # # Четвертый запрос: выбор лучших ключевых слов
    # new_prompt = "Теперь давай выберем из них 50 самых приоритетных и лучших - я буду загружать эти слова в парсер - поэтому каждый пункт это только 1 слово и важно чтобы оно было максимально простым и отражало суть чтобы собрать лучшие видео со всего ютюба и переведи эти слова на английский - в итоге в списке должно получить 50 слов (50 англ). Напиши только список слов, каждое слово с новой строки, без воды, только список из 50 слов."
    # messages.append({"role": "user", "content": new_prompt})
    #
    # completion = await client.chat.completions.create(
    #     model="gpt-4o-mini",
    #     messages=messages
    # )

    prompt = f"""
        Помоги мне составить список из 100 ключевых слов, которые содержатся в видео конкурентов или других контент-креаторов на площадке YouTube. Это нужно, чтобы я провел аналитику для своего канала со следующим запросом: «{request}»
        Слова могут быть общими по теме, средними и также точно целевыми, которые ищут люди. Они должны быть с очень высокой частотностью запросов, чтобы собрать максимально целевые видео. Может быть 1 слово, а может быть 2 
        Должен получиться список из 100 слов (50 на русском языке и 50 на английском), можешь перевести русские слова на английский и совместить их. 
        Пришли столбец с этими словами без цифр списка и дополнительных фраз
    """

    completion = await fetch_completion(client, prompt)


    return ResponseModel(result=completion.choices[0].message.content)


async def process_table(titles, context, indexes):
    print(len(titles))
    prompt = f"""
            CONTEXT: "{context}"

            Here is a table of YouTube videos titles:

            {titles}

            I WANT TO DROP IRRELEVANT TITLES BASED ON CONTEXT, please provide the row numbers of MOST RELEVANT VIDEOS TO THE CONTEX. PROVIDE 200 MOST RELEVANT VIDEOS!!! IT IS VERY IMPORTANT TO HAVE THE VIDEOS RELEVANT TO THE PROVIDED CONTEXT! SEND ME ONLY THE NUMBERS OF ON SEPARATE LINES!
            """

    completion = await fetch_completion(client, prompt)
    # completion = await client.chat.completions.create(
    #     model="gpt-4o-mini",
    #     messages=[{"role": "user", "content": prompt}]
    # )

    irrelevant_rows_str = completion.choices[0].message.content.strip()

    res = [int(num) for num in re.findall(r'\d+', irrelevant_rows_str)]
    irrelevant_rows = [num for num in indexes if num not in res]
    print('Relevant indeces: ', res)
    print('Irrelevant indeces: ', irrelevant_rows)
    return irrelevant_rows


async def get_lang(query):
    prompt_language = f'Provide me the language of this text: "{query}". Give only one word with the language'

    completion_language = await fetch_completion(client, prompt_language)
    lang = completion_language.choices[0].message.content

    return lang


async def generate_analytics_trends(completion: CompletionModel, relevant_videos: str, lang: str):
    prompt = f"""
        I have a dataset that contains the following material:
         "Video title, the URL, number of views, how long ago was the video published"
         Data is divided into 3 clusters (week, month, year). 
         Using these videos, you need to highlight 7 trends and give them a description. Your task is to rely only on these data and not write anything from yourself. What are the general trends and audience interests in this topic, there should be only 7 content sections, explaining why it works and what is worth doing. 
         Request of the person who wants to run the channel is as follows:
            "{completion.query}"
         The dataset:
            "{relevant_videos}"

        The final structure should look like this:
        """ + """
            [
                {
                    "name": "Name of first trend",
                    "description": "Description of first trend",
                    "explanation": "Explanation of first trend",
                    "examples": ["First example of first trend title", "First example of first trend URL", "Second example of first trend title", "Second example of first trend URL"]
                },
                {
                    "name": "Name of second trend",
                    "description": "Description of second trend",
                    "explanation": "Explanation of second trend",
                    "examples": ["First example of second trend title", "First example of second trend URL", "Second example of second trend title", "Second example of second trend URL"]
                },
            ]
        """ + f"""
        YOU SHOULD PROVIDE THIS DATA LIKE JSON, SO I CAN FORMAT IN LIKE PYTHON DICTIONARY, THE INFORMATION SHOULD BE IN {lang} LANGUAGE. DONT WRITE ANY ADDITIONAL TEXT AND COMMENTS, BECAUSE I NEED TO USE IT AS A JSON OBJECT!!!
        """

    # Waiting for GPT to return a valid JSON
    for attempt in range(1, 4):
        try:
            completion = await fetch_completion(client, prompt)
            if is_json(completion.choices[0].message.content[7:-4]):
                break
            else:
                if attempt < 4:
                    print(f"Retrying in {5} seconds...")
                    await asyncio.sleep(5)
                else:
                    print(f"Not json")
                    return None

        except Exception as e:
            print(f"Attempt {attempt} failed with error: {e}")
            return None

    return completion.choices[0].message.content[7:-4]


async def generate_analytics_not_trends(completion: CompletionModel, relevant_videos: str, lang: str):
    prompt = f"""
        I have a dataset that contains the following material:
         "Video title, the URL, number of views, how long ago was the video published"
         Data is divided into 3 clusters (week, month, year). 
         Using these videos, you need to highlight 3 anti trends and give them a description. Your task is to rely only on these data and not write anything from yourself. What are the general anti trends and audience not interested in this topic, there should be only 3 theme sections, explaining why it NOT works. 
         Request of the person who wants to run the channel is as follows:
            "{completion.query}"
         The dataset:
            "{relevant_videos}"
        
        So, write 3 bad trands and why they DIDN'T work.

        The final structure should look like this:
        """ + """
            [
                {
                    "name": "Name of first trend",
                    "description": "Description of first trend",
                    "explanation": "Explanation of first trend",
                    "examples": ["First example of first trend with hyperlinks(take the URL from the dataset)", "Second example of first trend with hyperlinks(take the URL from the dataset)"]
                },
                {
                    "name": "Name of second trend",
                    "description": "Description of second trend",
                    "explanation": "Explanation of second trend",
                    "examples": ["First example of second trend with hyperlinks(take the URL from the dataset)", "Second example of second trend with hyperlinks(take the URL from the dataset)"]
                },
            ]
        """ + f"""
        YOU SHOULD PROVIDE THIS DATA LIKE JSON, SO I CAN FORMAT IN LIKE PYTHON DICTIONARY, THE INFORMATION SHOULD BE IN {lang} LANGUAGE. DONT WRITE ANY ADDITIONAL TEXT AND COMMENTS, BECAUSE I NEED TO USE IT AS A JSON OBJECT!!!
        """

    completion = await fetch_completion(client, prompt)

    return completion.choices[0].message.content[7:-4]


async def generate_analytics_ideas(completion: CompletionModel, relevant_videos: str, lang: str):
    prompt = f"""
        I have a dataset that contains the following material:
         "Video title, the URL, number of views, how long ago was the video published"
         Data is divided into 3 clusters (week, month, year). 
         Pick 30 most effective alien videos from my competitors in my niche (video effectively if it gets many views in less time). There must be an idea (title), a link to it, number of views) 
         Request of the person who wants to run the channel is as follows:
            "{completion.query}"
         The dataset:
            "{relevant_videos}"

        So, make a table with 30 most effective videos.

        The final structure should look like this:
        """ + """
            [
                {
                    "idea": "Title of the top 1 video",
                    "link": "A link to the top 1 video(take the URL from the dataset)",
                    "number_of_views": "Number of views of top 1 video",
                    "effectiveness": "Write why the video is effective, considering video title",
                },
                {
                    "idea": "Title of the top 2 video",
                    "link": "A link to the top 2 video(take the URL from the dataset)",
                    "number_of_views": "Number of views of top 2 video",
                    "effectiveness": "Write why the video is effective, considering video title",
                },
            ]
        """ + f"""
        YOU SHOULD PROVIDE THIS DATA LIKE JSON, SO I CAN FORMAT IN LIKE PYTHON DICTIONARY, THE INFORMATION SHOULD BE IN {lang} LANGUAGE. DONT WRITE ANY ADDITIONAL TEXT AND COMMENTS, BECAUSE I NEED TO USE IT AS A JSON OBJECT!!!
        """

    # Waiting for GPT to return a valid JSON
    for attempt in range(1, 4):
        try:
            completion = await fetch_completion(client, prompt)
            if is_json(completion.choices[0].message.content[7:-4]):
                break
            else:
                if attempt < 4:
                    print(f"Retrying in {5} seconds...")
                    await asyncio.sleep(5)
                else:
                    print(f"Not json")
                    return None

        except Exception as e:
            print(f"Attempt {attempt} failed with error: {e}")
            return None

    return completion.choices[0].message.content[7:-4]

async def generate_analytics_content_strategy(completion: CompletionModel, relevant_videos: str, lang: str):
    prompt = f"""
        I have a dataset that contains the following material:
         "Video title, the URL, number of views, how long ago was the video published"
         Data is divided into 3 clusters (week, month, year). 
         Develop a content strategy that should include 3 types of videos (video for a large coverage, video for warm up, that is to say more aware audience, videos for selling my services, or to get a lot of subscribers, offer 7 topics per direction, add referrers from the table. In the table all videos are good, but priority is given to those that have gained more views in less time. 
         Request of the person who wants to run the channel is as follows:
            "{completion.query}"
         The dataset:
            "{relevant_videos}"

        So, make a table with 30 most effective ideas in 3 categories, considering video titles.

        The final structure should look like this:
        """ + """
            [
                {
                    "videos_to_get_more_subscribers": 
                        [
                            {
                                "name": "Write first idea of the video to get more subscribers",
                                "link": "http://example.com"
                            },
                            {
                                "name": "Write second idea of the video to get more subscribers",
                                "link": "http://example.com"
                            }
                        ],
                    "video_to_warmup_audience": 
                        [
                            {
                                "name": "Write first idea of the video to warmup audience",
                                "link": "http://example.com"
                            },
                            {
                                "name": "Write second idea of the video to warmup audience",
                                "link": "http://example.com"
                            },
                        ],
                    "videos_to_sell_me_services": 
                        [
                            {
                                "name": "Write first idea of the video to sell my services",
                                "link": "http://example.com"
                            },
                            {
                                "name": "Write second idea of the video to sell my services",
                                "link": "http://example.com"
                            },
                        ],
                },
            ]
        """ + f"""
        YOU SHOULD PROVIDE THIS DATA LIKE JSON, SO I CAN FORMAT IN LIKE PYTHON DICTIONARY, THE INFORMATION SHOULD BE IN {lang} LANGUAGE. DONT WRITE ANY ADDITIONAL TEXT AND COMMENTS, BECAUSE I NEED TO USE IT AS A JSON OBJECT!!!
        """

    print(prompt)

    # Waiting for GPT to return a valid JSON
    for attempt in range(1, 4):
        try:
            completion = await fetch_completion(client, prompt)
            if is_json(completion.choices[0].message.content[7:-4]):
                break
            else:
                if attempt < 4:
                    print(f"Retrying in {5} seconds...")
                    await asyncio.sleep(5)
                else:
                    print(f"Not json")
                    return None

        except Exception as e:
            print(f"Attempt {attempt} failed with error: {e}")
            return None


    return completion.choices[0].message.content[7:-4]
