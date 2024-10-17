import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

type RegisterResponse = {
    success: boolean;
    code_id: number | null;
};

type LoginResponse = {
    access_token: string
    token_type: string
}

type VerifyResponse = {
    success: boolean
    message: string
}

export async function register_user(username: string, password: string, refferer: string | null): Promise<RegisterResponse> {
    const data = {
        username: username,
        password: password,
        refferer: refferer != "" ? refferer : null
    };

    try {
        const response = await axios.post(`${backendUrl}/auth/register`, data);
        return response.data;
    } catch (error:any) {
        // Обработка ошибки и возврат соответствующего объекта RegisterResponse
        return {
            success: false,
            code_id: error.response ? error.response.status : null // или другой код ошибки
        };
    }
}

export async function verify(code_id: number, code: number): Promise<VerifyResponse> {
    const data = {
        code_id: code_id,
        code: code
    };
    console.log(data)
    try {
        const response = await axios.post(`${backendUrl}/auth/verify`, data);
        return response.data;
    } catch (error:any) {
        // Обработка ошибки и возврат соответствующего объекта RegisterResponse
        return {
            success: false,
            message: error.response ? error.response.status : null // или другой код ошибки
        };
    }
}

export async function login(username: string, password: string): Promise<LoginResponse> {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);

    try {
        const response = await axios.post(`${backendUrl}/auth/login`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return {
            access_token: response.data.access_token,
            token_type: 'bearer'
        };
    } catch (error:any) {
        throw new Error(`Login failed: ${error.response ? error.response.status : 'Unknown error'}`);
    }
}
