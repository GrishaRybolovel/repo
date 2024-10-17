import requests
import json
from .models import CreatePaymentModel
from .config import rate_data
import os

backendUrl = os.environ.get("BACKEND_URL")
successUrl = f"{backendUrl}/payment/success"

def create_payment_link(order_id: int, amount: int, customer: str, discount: int) -> CreatePaymentModel:
    linktoform = 'https://trendvi.payform.ru/'

    amount_data = rate_data[amount]['amount']

    data = {
        'order_id': order_id,
        'customer_email': customer,
        'do': 'link',
        "order_sum": amount_data,
        "discount_value": min(amount_data, discount),
        "urlSuccess": successUrl,
        'currency': 'rub'
    }

    response = requests.get(linktoform, params=data)
    if response.status_code == 200:
        response = requests.get(response.url)
        return CreatePaymentModel(payment_link = response.text)
    else:
        return CreatePaymentModel(status=False, payment_link = "")

def get_payment_rate(amount: int):
    try:
        return rate_data[amount]['values']
    except KeyError:
        return [0, 0, "Free"]