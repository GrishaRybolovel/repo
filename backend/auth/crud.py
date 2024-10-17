import asyncpg
from .models import User, VerifyCodeModel
from .schemas import AuthModel
from datetime import datetime

async def get_user(username: str) -> User | None:
    conn = await asyncpg.connect()
    try:
        data = await conn.fetchrow("SELECT * FROM users WHERE username=$1", username)
        if data is not None:
            return User(**dict(data))
        return None
    finally:
        await conn.close()

async def register_user(user: AuthModel) -> User:
    conn = await asyncpg.connect()
    try:
        await conn.execute("INSERT INTO users (username, password, refferer) VALUES ($1, $2, $3)",
                           user.username, user.password, user.refferer)
        data = await conn.fetchrow("SELECT * FROM users WHERE username=$1", user.username)
        if data is not None:
            return User(**dict(data))
    finally:
        await conn.close()

async def insert_user_code(code: int, user_id: int) -> int:
    conn = await asyncpg.connect()
    try:
        await conn.execute("INSERT INTO codes (user_id, code) VALUES ($1, $2)", user_id, code)
        data = await conn.fetchrow("SELECT * FROM codes WHERE user_id=$1 AND code=$2", user_id, code)
        data = dict(data)
        return int(data['code_id'])
    finally:
        await conn.close()

async def delete_user_code(code_id: int):
    conn = await asyncpg.connect()
    try:
        await conn.execute("DELETE FROM codes WHERE code_id=$1", code_id)
    finally:
        await conn.close()

async def activate_user(code_id: int, code: int) -> VerifyCodeModel:
    conn = await asyncpg.connect()
    try:
        data = await conn.fetchrow("SELECT * FROM codes WHERE code_id=$1", code_id)
        if data is not None:
            data = dict(data)
            if data['code'] == code:
                await conn.execute("UPDATE users SET activated=true WHERE user_id=$1", data["user_id"])
                await conn.execute("DELETE FROM codes WHERE code_id=$1", code_id)
                return VerifyCodeModel(success=True)
            else:
                return VerifyCodeModel(success=False, message="Incorrect code")
        else:
            return VerifyCodeModel(success=False, message="Code does not exist")
    finally:
        await conn.close()

async def activate_user_test(user_id: int) -> VerifyCodeModel:
    conn = await asyncpg.connect()
    try:
        await conn.execute("UPDATE users SET activated=true WHERE user_id=$1", user_id)
        return VerifyCodeModel(success=True)
    finally:
        await conn.close()

async def get_user_by_code_id(code_id: int) -> User | None:
    conn = await asyncpg.connect()
    try:
        data = await conn.fetchrow("SELECT * FROM codes WHERE code_id = $1", code_id)
        user_data = await conn.fetchrow("SELECT * FROM users WHERE user_id=$1", dict(data)['user_id'])
        if data is not None:
            return User(**dict(user_data))
        return None
    finally:
        await conn.close()

async def update_user_password(user_id: int, new_password: str):
    conn = await asyncpg.connect()
    try:
        await conn.execute("UPDATE users SET password=$1 WHERE user_id=$2", new_password, user_id)
    finally:
        await conn.close()

async def add_subscription_warning(user_id: int, date: datetime) -> bool:
    conn = await asyncpg.connect()
    try:
        # Extract the date part from the timestamp for comparison
        existing_record = await conn.fetchrow(
            """
            SELECT 1 FROM subscription_warning
            WHERE user_id=$1
              AND DATE(subscription_warning_date) = DATE($2)
            """,
            user_id, date
        )

        if existing_record:
            # Record already exists
            return False

        # Insert the new record
        await conn.execute(
            "INSERT INTO subscription_warning (user_id, subscription_warning_date) VALUES ($1, $2)",
            user_id, date
        )
        return True

    finally:
        await conn.close()
