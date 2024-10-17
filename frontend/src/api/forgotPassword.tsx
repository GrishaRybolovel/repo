import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL

type ForgotPasswordResponse = {
    message: string
    code_id: number
}

type ResetPasswordResponse = {
    message: string
}

export async function forgotPassword(username: string): Promise<ForgotPasswordResponse> {
    console.log(username)
    const data = {
        email: username
    };
    console.log(data)
    try {
        const response = await axios.post(`${backendUrl}/auth/forgot-password`, data);
        return response.data;
    } catch (error:any) {
        // Обработка ошибки и возврат соответствующего объекта RegisterResponse
        console.error(error)
        return error
    }
}

export async function resetPassword(code_id: number, code: number, new_password: string): Promise<ResetPasswordResponse> {
    const data = {
      code_id: code_id,
      code: code,
      new_password: new_password
    };
    console.log(data)
    try {
        const response = await axios.post(`${backendUrl}/auth/reset-password`, data);
        return response.data;
    } catch (error:any) {
        // Обработка ошибки и возврат соответствующего объекта RegisterResponse
        console.error(error)
        return error
    }
}