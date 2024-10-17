import jwt
import datetime
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
import json
from passlib.context import CryptContext
from .models import AuthUserModel
import random
import os

SECRET_KEY = os.environ.get("SECRET_KEY")  # Замените на ваш секретный ключ
ALGORITHM = "HS256"

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password):
    return pwd_context.hash(password)

def verify_password(password, hashed_password):
    return pwd_context.verify(password, hashed_password)

def create_access_token(data: dict, expires_delta: datetime.timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.datetime.utcnow() + expires_delta
    else:
        expire = datetime.datetime.utcnow() + datetime.timedelta(days=7)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str, credentials_exception) -> AuthUserModel:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        user = json.loads(payload.get("user"))
        json_data = {
            "user_id": user.get("user_id"),
            "username": user.get("username")
        }
        if username is None:
            raise credentials_exception
        return AuthUserModel(**json_data)
    except jwt.PyJWTError:
        raise credentials_exception

def get_current_user(token: str = Depends(oauth2_scheme)) -> AuthUserModel:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    return verify_token(token, credentials_exception)

def generate_register_code():
    return random.randrange(100000, 999999)