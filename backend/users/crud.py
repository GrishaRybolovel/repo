import asyncpg
from .models import UserModel
from typing import List, Optional

async def get_user(user_id: int) -> UserModel | None:
    conn = await asyncpg.connect()
    try:
        user = await conn.fetchrow("SELECT * FROM users WHERE user_id=$1", user_id)
        if user is None:
            return None
        return UserModel(**dict(user))
    finally:
        await conn.close()

async def get_all_users() -> List[UserModel]:
    conn = await asyncpg.connect()
    try:
        users = await conn.fetch("SELECT * FROM users")

        return [UserModel(**dict(user)) for user in users]
    finally:
        await conn.close()