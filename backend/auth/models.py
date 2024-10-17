from pydantic import BaseModel
from typing import Literal, Optional
from datetime import datetime

class User(BaseModel):
    user_id: int
    username: str
    password: str
    rate: str
    balance: int
    refferer: Optional[str] = None
    credit_count: int
    analytics_count: int
    subscription_date: datetime
    activated: bool

class AuthUserModel(BaseModel):
    user_id: int
    username: str

class VerifyUserModel(BaseModel):
    success: bool

class RegisterUserModel(BaseModel):
    success: bool
    code_id: Optional[int] = None

class LoginUserModel(BaseModel):
    access_token: str
    token_type: str = "bearer"

class VerifyCodeModel(BaseModel):
    success: bool
    message: Optional[str] = "Account successfully verified"

class ForgotPasswordModel(BaseModel):
    message: str = "Password reset code sent to your email"
    code_id: int

class ResetPasswordModel(BaseModel):
    message: str = "Password has been reset successfully"