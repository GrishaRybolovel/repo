import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL

type PaymentResponse = {
    status: boolean
    payment_link: string
}

export async function createPayment(rate: number): Promise<PaymentResponse> {
    const auth = localStorage.getItem('auth')
    const data = {
        rate: rate,
        quanity: 1
    };
    console.log(data)
    try {
        const response = await axios.post(`${backendUrl}/payment/create`, {}, {
            headers: {
                "Authorization": `Bearer ${auth}`
            },
            params: data
        });
        return response.data;
    } catch (error:any) {
        // Обработка ошибки и возврат соответствующего объекта RegisterResponse
        console.error(error)
        return error
    }
}