from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class UserModel(BaseModel):
    user_id: int
    username: str
    rate: str
    balance: int
    refferer: Optional[str] = None
    credit_count: int
    analytics_count: int
    subscription_date: datetime
    activated: bool
