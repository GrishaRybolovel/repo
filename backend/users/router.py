from fastapi import APIRouter, Depends
from auth.utils import get_current_user
from .models import UserModel
from .crud import get_user

users_router = APIRouter(tags=['Users'], prefix='/users')

@users_router.get('/me')
async def get_current_user(user: dict = Depends(get_current_user)) -> UserModel:
    user = await get_user(user.user_id)
    return user