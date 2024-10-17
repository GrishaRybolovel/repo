import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

type UserObject = {
    user_id: number;
    username: string;
    rate: string;
    balance: number;
    refferer: string;
    credit_count: number;
    analytics_count: number;
    subscription_date: string;
    activated: boolean
};

export async function get_user_data(auth_token: string): Promise<UserObject> {
    try {
        const response = await axios.get(`${backendUrl}/users/me`, {
            headers: {
                "Authorization": `Bearer ${auth_token}`
            }
        });
        return response.data;
    } catch (error:any) {
        localStorage.removeItem('auth')
        throw new Error(`Fetching user data failed: ${error.response ? error.response.status : 'Unknown error'}`);
    }
}