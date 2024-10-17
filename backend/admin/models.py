from pydantic import BaseModel

class PaymentModel(BaseModel):
    order_id: int
    amount: int
    customer: str