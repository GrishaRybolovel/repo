import asyncpg
from typing import List
from .models import CompletionModel
from uuid import uuid4
from datetime import datetime, timedelta
import pytz
from users.crud import get_user


async def add_completion(keywords: str, user: str, query: str = '') -> CompletionModel:
    conn = await asyncpg.connect()
    try:
        # Используем RETURNING для получения вставленных данных
        result = await conn.fetchrow("""
            INSERT INTO completions(completion_id, owner_id, keywords, query) 
            VALUES($1, $2, $3, $4) 
            RETURNING *
        """, str(uuid4()), user, keywords, query)
        return CompletionModel(**result)
    finally:
        await conn.close()


async def list_completions(user: str) -> List[CompletionModel]:
    conn = await asyncpg.connect()
    try:
        result = await conn.fetch("SELECT * FROM completions WHERE owner_id = $1 ORDER BY createdate DESC", user)
        if result:
            return [CompletionModel(**item) for item in result]
        else:
            return []
    finally:
        await conn.close()


async def list_all_completions() -> List[CompletionModel]:
    conn = await asyncpg.connect()
    try:
        result = await conn.fetch("SELECT * FROM completions")
        return [CompletionModel(**item) for item in result]
    finally:
        await conn.close()


async def get_completion_by_id(completion_id: str) -> CompletionModel:
    conn = await asyncpg.connect()
    try:
        row = await conn.fetchrow("SELECT * FROM completions WHERE completion_id = $1", completion_id)
        return CompletionModel(**row)
    finally:
        await conn.close()


async def update_completion(completion_id: str, new_keywords: str, user_id: str, filename: str = None,
                            trends: str = None, not_trends: str = None, ideas: str = None,
                            content_strategy: str = None, average_views: str = None) -> CompletionModel:
    conn = await asyncpg.connect()
    try:
        query = """
            UPDATE completions
            SET keywords = $1, filename = $2, status = TRUE, trends = $5, not_trends = $6, ideas = $7, content_strategy = $8, average_views = $9
            WHERE completion_id = $3 AND owner_id = $4
            RETURNING *
        """
        result = await conn.fetchrow(query, new_keywords, filename, completion_id, user_id, trends, not_trends, ideas,
                                     content_strategy, average_views)
        if result:
            return CompletionModel(**result)
    finally:
        await conn.close()


async def update_completion_keywords(completion_id: str, new_keywords: str, user_id: str) -> CompletionModel:
    conn = await asyncpg.connect()
    try:
        query = """
            UPDATE completions
            SET keywords = $1
            WHERE completion_id = $2 AND owner_id = $3
            RETURNING *
        """
        result = await conn.fetchrow(query, new_keywords, completion_id, user_id)
        if result:
            return CompletionModel(**result)
    finally:
        await conn.close()


async def update_user_analytics(user_id: str) -> bool:
    conn = await asyncpg.connect()
    try:
        check_query = """SELECT analytics_count FROM users WHERE user_id = $1"""
        current_count = await conn.fetchval(check_query, user_id)

        if current_count > 0:
            update_query = """
                        UPDATE users 
                        SET analytics_count = analytics_count - 1 
                        WHERE user_id = $1
                        RETURNING *;
                    """
            result = await conn.fetchrow(update_query, user_id)

            if result:
                return True
        return False
    except Exception as e:
        print(f"Error updating user analytics: {e}")
        return False
    finally:
        await conn.close()


async def add_user_analytics(user_id: str) -> bool:
    conn = await asyncpg.connect()
    try:
        update_query = """
                    UPDATE users 
                    SET analytics_count = analytics_count + 1 
                    WHERE user_id = $1
                    RETURNING *;
                """
        result = await conn.fetchrow(update_query, user_id)

        if result:
            return True
        return False
    except Exception as e:
        print(f"Error updating user analytics: {e}")
        return False
    finally:
        await conn.close()


async def update_user_credit(user_id: str) -> bool:
    conn = await asyncpg.connect()
    try:
        check_query = """SELECT credit_count FROM users WHERE user_id = $1"""
        current_count = await conn.fetchval(check_query, user_id)
        print(current_count)

        if current_count > 0:
            update_query = """
                        UPDATE users 
                        SET credit_count = credit_count - 1 
                        WHERE user_id = $1
                        RETURNING *;
                    """
            result = await conn.fetchrow(update_query, user_id)

            if result:
                return True
        return False
    except Exception as e:
        print(f"Error updating user credit: {e}")
        return False
    finally:
        await conn.close()


async def add_user_credit(user_id: str) -> bool:
    conn = await asyncpg.connect()
    try:

        update_query = """
                    UPDATE users 
                    SET credit_count = credit_count + 1 
                    WHERE user_id = $1
                    RETURNING *;
                """
        result = await conn.fetchrow(update_query, user_id)

        if result:
            return True
        return False
    except Exception as e:
        print(f"Error updating user credit: {e}")
        return False
    finally:
        await conn.close()


async def check_user_subscription(user_id: int) -> bool:
    try:
        user = await get_user(user_id)

        if user is None:
            return False

        if user.rate == 'Free':
            return True

        moscow_tz = pytz.timezone('Europe/Moscow')
        subscription_date_moscow = user.subscription_date.astimezone(moscow_tz)
        current_date = datetime.now(moscow_tz)

        if current_date <= subscription_date_moscow:
            return True

        return False
    except Exception as e:
        print(f"Error checking subscription: {e}")
        return False
