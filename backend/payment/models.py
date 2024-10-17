from pydantic import BaseModel

class CreatePaymentModel(BaseModel):
    status: bool = True
    payment_link: str

class PaymentModel(BaseModel):
    order_id: int
    amount: int
    customer: str