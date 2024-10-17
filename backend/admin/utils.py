from .config import rate_data

def get_payment_rate(amount: int):
    try:
        return rate_data[amount]
    except KeyError:
        return [0, 0, "Free"]