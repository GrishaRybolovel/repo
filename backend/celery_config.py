# celery_config.py
from celery import Celery
import os

redis_url = os.getenv("REDIS_URL", "redis://redis:6379/0")

# Create a Celery instance with a Redis broker
celery_app = Celery(
    "tasks",
    broker=redis_url,
    backend=redis_url,
)

celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="Europe/Moscow",
    enable_utc=False,
    broker_connection_retry_on_startup=True,
    imports=["generate.utils", "auth.emailservice"],
    task_acks_late=True,  # Acknowledge tasks only after they are completed
    task_reject_on_worker_lost=True,  # Requeue tasks if worker crashes
    task_default_retry_delay=30,  # Delay between retries
    task_max_retries=3,  # Maximum number of retries
    beat_schedule={
        'send_subscription_warning_task': {
            'task': 'auth.emailservice.send_email_subscription_sync',  # Update this with your actual task path
            'schedule': 1200.0,  # 1200 seconds = 20 minutes
        },
    },
    beat_schedule_filename='celerybeat-schedule',  # Name of the file to store the schedule
    beat_max_loop_interval=5,
)