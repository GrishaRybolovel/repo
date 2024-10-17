import asyncpg
from .models import PaymentModel
from .utils import get_payment_rate
from .config import rate_data
from datetime import datetime, timedelta
import pytz

async def insert_payment(amount: int, customer: str) -> PaymentModel:
    conn = await asyncpg.connect()
    try:
        data = await conn.fetchrow(
            "INSERT INTO payments(amount, customer) VALUES ($1, $2) RETURNING order_id, amount, customer",
            amount,
            customer
        )
        return PaymentModel(**dict(data))
    finally:
        await conn.close()

async def set_subscription(order_id: int):
    conn = await asyncpg.connect()
    try:
        payment_data = await conn.fetchrow("SELECT * FROM payments WHERE order_id = $1", order_id)
        if payment_data:
            payment_data = PaymentModel(**dict(payment_data))
            analytics_count, credit_count, rate = get_payment_rate(payment_data.amount)
            await conn.execute("UPDATE users SET analytics_count = $1 WHERE username = $2",
                               analytics_count, payment_data.customer)
            await conn.execute("UPDATE users SET credit_count = $1 WHERE username = $2",
                                credit_count, payment_data.customer)
            await conn.execute("UPDATE users SET rate = $1 WHERE username = $2",
                               rate, payment_data.customer)

            moscow_tz = pytz.timezone('Europe/Moscow')
            current_date = datetime.now()
            one_month_later = (current_date + timedelta(days=30)).astimezone(moscow_tz)
            await conn.execute("UPDATE users SET subscription_date = $1 WHERE username = $2",
                               one_month_later, payment_data.customer)
            refferer_data = await conn.fetchrow("SELECT * FROM users WHERE username = $1", payment_data.customer)
            refferrer_username = dict(refferer_data).get("refferer")
            user_balance = int(dict(refferer_data).get("balance"))
            if refferrer_username is not None:
                await conn.execute("UPDATE users SET balance = balance + $1 WHERE username = $2",
                                   rate_data[payment_data.amount]['reffererAmount'], refferrer_username)
            if user_balance > 0:
                amount_to_deduct = rate_data[payment_data.amount]['amount']
                await conn.execute("UPDATE users SET balance = balance - $1 WHERE username = $2",
                                   min(amount_to_deduct, user_balance), payment_data.customer)
    except Exception as e:
        print(f'A set_subscription error occured: {e}')
    finally:
        await conn.close()
