from fastapi import APIRouter, Depends, Query, Request
from fastapi.security import APIKeyHeader
from .crud import set_subscription
from .schemas import Rate
from fastapi.templating import Jinja2Templates
import os

admin_router = APIRouter(tags=["Admin"], prefix="/admin")
api_key_header = APIKeyHeader(name="Admin", auto_error=False)

current_dir = os.path.dirname(os.path.abspath(__file__))
static_dir = os.path.join(current_dir, "static")
templates_dir = os.path.join(current_dir, "templates")

templates = Jinja2Templates(directory=templates_dir)

@admin_router.get("/setRate", include_in_schema=False)
async def get_set_rate_form(request: Request):
    return templates.TemplateResponse("set_rate.html", {"request": request})

@admin_router.post("/setRate")
async def setRate(rateData: Rate ,api_key = Depends(api_key_header)):
    if api_key == "trendvi":
        await set_subscription(rateData.rateType, rateData.username)
        return True
    return False