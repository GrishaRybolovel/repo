import asyncpg
from .models import PaymentModel
from .utils import get_payment_rate
import pytz
from datetime import datetime, timedelta

async def set_subscription(rateType: int, username: str):
    conn = await asyncpg.connect()
    try:
        analytics_count, credit_count, rate = get_payment_rate(rateType)
        await conn.execute("UPDATE users SET analytics_count = $1 WHERE username = $2",
                           analytics_count, username)
        await conn.execute("UPDATE users SET credit_count = $1 WHERE username = $2",
                            credit_count, username)
        await conn.execute("UPDATE users SET rate = $1 WHERE username = $2",
                           rate, username)

        moscow_tz = pytz.timezone('Europe/Moscow')
        current_date = datetime.now()
        one_month_later = (current_date + timedelta(days=30)).astimezone(moscow_tz)
        await conn.execute("UPDATE users SET subscription_date = $1 WHERE username = $2",
                           one_month_later, username)
    finally:
        await conn.close()