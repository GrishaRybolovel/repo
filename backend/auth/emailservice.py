from email.utils import make_msgid
import smtplib
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from users.crud import get_all_users
from datetime import datetime, timedelta
from .crud import add_subscription_warning
import asyncio
import pytz

from celery_config import celery_app

LOGIN = os.environ.get("SMTP_LOGIN")
PASSWORD = os.environ.get("SMTP_PASSWORD")
SMTP_SERVER = "mail.trendvi.ru"
PORT = 465
backend_url = os.getenv("BACKEND_URL", "https://trendvi-test.ru")

@celery_app.task
def send_email(email, code, reset: bool = False):
    message = generate_message(email, code, reset)
    with smtplib.SMTP_SSL(SMTP_SERVER, PORT) as server:
        server.login(LOGIN, PASSWORD)
        server.sendmail(LOGIN, email, message)
        return True

@celery_app.task
def send_email_analytics(email, completion_id):
    message = generate_message_analytics(email, completion_id)

    print(f'User email to send message: {email}')
    with smtplib.SMTP_SSL(SMTP_SERVER, PORT) as server:
        server.login(LOGIN, PASSWORD)
        server.sendmail(LOGIN, email, message)
        return True

@celery_app.task
def send_email_subscription_sync():
    asyncio.run(send_email_subscription())

async def send_email_subscription():

    users = await get_all_users()
    moscow_tz = pytz.timezone('Europe/Moscow')
    current_date = datetime.now(moscow_tz)
    for user in users:
        time_difference = user.subscription_date - current_date
        if user.rate != 'Free' and time_difference == timedelta(days=1):
            try:
                created = await add_subscription_warning(user.user_id, user.subscription_date)
                if created:
                    message = generate_message_subscription(user.username)

                    print(f'User email to send message: {user.username}')
                    with smtplib.SMTP_SSL(SMTP_SERVER, PORT) as server:
                        server.login(LOGIN, PASSWORD)
                        server.sendmail(LOGIN, user.username, message)
                        return True
            except Exception as e:
                print(f'Sending subscription inspiration email error: {e}')


def generate_message(username, code, reset: bool = False):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Код подтверждения для TRENDVI"
    msg["From"] = LOGIN
    msg["To"] = username
    msg['Message-ID'] = make_msgid()

    msg_title = "<p>Ваш код для восстановления доступа:</p>" if reset else "<p>Ваш код для регистрации:</p>"

    html = f"""\
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #a090de; text-align: center;">TRENDVI</h2>
          <p>Здравствуйте, {username}</p>
          {msg_title}
          <p style="font-size: 24px; text-align: center; color: #a090de; margin: 20px 0;">{code}</p>
          <p>Пожалуйста, введите этот код для завершения регистрации.</p>
          <p style="color: #888; font-size: 12px; text-align: center;">Если вы не запрашивали этот код, просто проигнорируйте это сообщение.</p>
        </div>
      </body>
    </html>
    """

    part = MIMEText(html, "html")
    msg.attach(part)

    return msg.as_string()

def generate_message_analytics(username, completion_id):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Аналитика TRENDVI"
    msg["From"] = LOGIN
    msg["To"] = username
    msg['Message-ID'] = make_msgid()
    link = backend_url + f'/generate/download/{completion_id}'

    msg_title = "<p>Ваша аналитика готова</p>"

    html = f"""\
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #a090de; text-align: center;">TRENDVI</h2>
          <p>Здравствуйте, {username}</p>
          {msg_title}
          <p style="font-size: 16px; text-align: center; color: #a090de; margin: 20px 0;">ID: {completion_id}. Вы можете посмотреть ее в личном кабинете, или скачать по ссылке ниже</p>
          <p><a href="{link}">{link}</a></p>
        </div>
      </body>
    </html>
    """

    part = MIMEText(html, "html")
    msg.attach(part)

    return msg.as_string()

def generate_message_subscription(username):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Подписка TRENDVI"
    msg["From"] = LOGIN
    msg["To"] = username
    msg['Message-ID'] = make_msgid()
    link = backend_url[:-4] + '/profile'

    msg_title = "<p>Ваша подписка скоро закончится</p>"

    html = f"""\
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #a090de; text-align: center;">TRENDVI</h2>
          <p>Здравствуйте, {username}</p>
          {msg_title}
          <p style="font-size: 16px; text-align: center; color: #a090de; margin: 20px 0;">Для продления перейдите по ссылке ниже</p>
          <p><a href="{link}">{link}</a></p>
        </div>
      </body>
    </html>
    """

    part = MIMEText(html, "html")
    msg.attach(part)

    return msg.as_string()