from fastapi import APIRouter, Depends, Request, Query
from .utils import create_payment_link
from .models import CreatePaymentModel
from auth.utils import get_current_user
from auth.models import AuthUserModel
from .crud import insert_payment, set_subscription
from fastapi.templating import Jinja2Templates
from users.crud import get_user
import os

payment_router = APIRouter(tags=["Payment"], prefix="/payment")

current_dir = os.path.dirname(os.path.abspath(__file__))
static_dir = os.path.join(current_dir, "static")
templates_dir = os.path.join(current_dir, "templates")

templates = Jinja2Templates(directory=templates_dir)

@payment_router.post("/create")
async def create_payment(rate: int = Query(ge=1, le=3), quanity: int = Query(ge=1, le=2), user: AuthUserModel = Depends(get_current_user)) -> CreatePaymentModel:
    payment_data = await insert_payment(rate, user.username)
    user_data = await get_user(user.user_id)
    return create_payment_link(payment_data.order_id, payment_data.amount, payment_data.customer, user_data.balance)

@payment_router.get("/success", include_in_schema=False)
async def process_payment(request: Request):
    params = dict(request.query_params)
    order_id = params.get("_payform_order_id")
    await set_subscription(int(order_id))

    return templates.TemplateResponse("success.html", {"request": {}, "message": "Успешная оплата!", "return_url": "https://app.trendvi.ru"})
