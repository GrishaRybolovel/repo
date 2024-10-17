from pydantic import BaseModel, EmailStr
from typing import Optional

class AuthModel(BaseModel):
    username: EmailStr
    password: str
    refferer: Optional[EmailStr] = None

class VerifyEmail(BaseModel):
    code_id: int
    code: int

class PasswordResetRequest(BaseModel):
    email: EmailStr

class PasswordResetVerification(BaseModel):
    code_id: int
    code: int
    new_password: str