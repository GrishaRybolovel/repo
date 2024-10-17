import asyncio
import json
import re
import random
from youtube_transcript_api import YouTubeTranscriptApi, CouldNotRetrieveTranscript
from .crud import update_completion, update_completion_keywords, get_completion_by_id
from .generate import generate_analytics_completion, generate_analytics_trends, get_lang, generate_analytics_not_trends, \
    generate_analytics_ideas, generate_analytics_content_strategy
from .analytics import generate_analytics_data
from celery_config import celery_app
from auth.emailservice import send_email_analytics
from users.crud import get_user
from celery import Celery, Task
from celery import shared_task

transcript_api = YouTubeTranscriptApi()


class GetVideoException(Exception):
    pass


@celery_app.task
def insert_keywords_sync(completion_id, request, user_id):
    # Use asyncio.run() to run the async function synchronously
    asyncio.run(insert_keywords(completion_id, request, user_id))


async def insert_keywords(completion_id, request, user_id):
    ai_data = await generate_analytics_completion(request)
    keywords = ai_data.result

    try:
        task = insert_analytics_sync.apply_async(args=(completion_id, keywords, user_id), task_id=completion_id)
        print(task.id)
    except Exception as e:
        print(f"Error launching task: {e}")
    return await update_completion_keywords(completion_id, keywords, user_id)


# @celery_app.task
# def insert_analytics_sync(completion_id, keywords, user_id):
#     asyncio.run(insert_analytics(completion_id, keywords, user_id))


class InsertAnalyticsTask(Task):
    def run(self, completion_id, keywords, user_id, **kwargs):
        task_id = self.request.id  # Get the task ID
        asyncio.run(self.insert_analytics(completion_id, keywords, user_id, task_id))

    async def insert_analytics(self, completion_id, keywords, user_id, task_id):
        # Access the task instance
        task = self
        completion = await get_completion_by_id(str(completion_id))
        lang = await get_lang(completion.query)
        file_path, relevant_videos, average_views = await generate_analytics_data(keywords.split('\n'),
                                                                                  completion, task)

        trends = await generate_analytics_trends(completion, relevant_videos, lang)
        not_trends = await generate_analytics_not_trends(completion, relevant_videos, lang)
        ideas = await generate_analytics_ideas(completion, relevant_videos, lang)
        content_strategy = await generate_analytics_content_strategy(completion, relevant_videos, lang)

        user = await get_user(user_id)
        print('Sending email...')
        send_email_analytics.delay(user.username, completion_id)
        return await update_completion(completion_id, keywords, user_id, filename=file_path, trends=trends,
                                       not_trends=not_trends, ideas=ideas, content_strategy=content_strategy,
                                       average_views=json.dumps(average_views))


async def insert_analytics(completion_id, keywords, user_id):
    # pattern = r"\b[A-Za-z-]+\b"
    #
    # keywords_extracted = re.findall(pattern, keywords)
    print(completion_id)
    completion = await get_completion_by_id(str(completion_id))
    file_path = await generate_analytics_data(keywords.split('\n'), completion)

    user = await get_user(user_id)
    print('Sending email...')
    send_email_analytics.delay(user.username, completion_id)
    return await update_completion(completion_id, keywords, user_id, filename=file_path)


def check_link(url):
    regex_patterns = [
        r"(?:http[s]?://)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)",
        r"(?:http[s]?://)?(?:www\.)?youtube\.com/watch\?v=([a-zA-Z0-9_-]+)",
        r"(?:http[s]?://)?(?:www\.)?youtube\.com/v/([a-zA-Z0-9_-]+)",
        r"(?:http[s]?://)?(?:www\.)?youtube\.com/embed/([a-zA-Z0-9_-]+)",
        r"(?:http[s]?://)?(?:www\.)?youtube\.com/shorts/([a-zA-Z0-9_-]+)",
    ]

    video_id = None
    for pattern in regex_patterns:
        match = re.search(pattern, url)
        if match:
            video_id = match.group(1)
            break

    if video_id is None:
        raise ValueError(f"Некорректный URL: {url}. Пожалуйста, введи правильную ссылку на видео YouTube.")

    return video_id


def get_proxies(file_path):
    with open(file_path, 'r') as file:
        proxies = file.readlines()
    return [proxy.strip() for proxy in proxies]


def get_video_transcript(video_id):
    try:
        video_transcript = transcript_api.get_transcript(video_id, languages=['en', 'ru'])
        return video_transcript
    except Exception as e:
        # You can add custom error messages or logging here
        raise GetVideoException("Video exception")


insert_analytics_sync = celery_app.register_task(InsertAnalyticsTask())
