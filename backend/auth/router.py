from fastapi import APIRouter, Depends, BackgroundTasks, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from .schemas import AuthModel, VerifyEmail, PasswordResetRequest, PasswordResetVerification
from .models import (VerifyUserModel,
                     RegisterUserModel,
                     LoginUserModel,
                     VerifyCodeModel,
                     ForgotPasswordModel,
                     ResetPasswordModel)
from .utils import hash_password, create_access_token, verify_password, generate_register_code
from .crud import get_user, register_user, insert_user_code, activate_user, get_user_by_code_id, update_user_password, \
    activate_user_test, delete_user_code
from .emailservice import send_email, generate_message
import os

auth_router = APIRouter(tags=['Auth'], prefix='/auth')
FLAG = os.getenv("FLAG", "PROD")


@auth_router.post("/register", description="Register user")
async def register(user_data: AuthModel, background_tasks: BackgroundTasks) -> RegisterUserModel:
    check_user = await get_user(user_data.username)
    if not check_user or check_user.activated == False:
        if not check_user:
            hashed_password = hash_password(user_data.password)
            user_data.password = hashed_password
            user_data = await register_user(user_data)
        else:
            user_data = check_user

        if FLAG == "PROD":
            register_code = generate_register_code()
            code_id = await insert_user_code(register_code, user_data.user_id)
            # background_tasks.add_task(send_email, user_data.username, register_code)
            send_email.delay(user_data.username, register_code)
            return RegisterUserModel(success=True, code_id=code_id)
        else:
            result = await activate_user_test(user_data.user_id)
            if result.success:
                register_code = generate_register_code()
                code_id = await insert_user_code(register_code, user_data.user_id)
                await delete_user_code(code_id)
                return RegisterUserModel(success=True, code_id=code_id)
            else:
                return RegisterUserModel(success=False)
    else:
        return RegisterUserModel(success=False)


@auth_router.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()) -> LoginUserModel:
    user = await get_user(form_data.username)
    if not user or not verify_password(form_data.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user.password, "user": user.json()})
    return LoginUserModel(access_token=access_token)


@auth_router.post("/forgot-password")
async def forgot_password(request: PasswordResetRequest, background_tasks: BackgroundTasks) -> ForgotPasswordModel:
    user = await get_user(request.email)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    reset_code = generate_register_code()
    code_id = await insert_user_code(reset_code, user.user_id)
    # background_tasks.add_task(send_email, request.email, reset_code, True)
    send_email.delay(request.email, reset_code, True)
    return ForgotPasswordModel(code_id=code_id)


@auth_router.post("/reset-password")
async def reset_password(verification: PasswordResetVerification) -> ResetPasswordModel:
    user = await get_user_by_code_id(verification.code_id)
    code_validity = await activate_user(verification.code_id, verification.code)
    if not code_validity.success:
        return ResetPasswordModel(message="Invalid code")
    hashed_password = hash_password(verification.new_password)
    await update_user_password(user.user_id, hashed_password)
    return ResetPasswordModel()


@auth_router.post("/verify")
async def verify(verify_data: VerifyEmail) -> VerifyCodeModel:
    return await activate_user(verify_data.code_id, verify_data.code)
