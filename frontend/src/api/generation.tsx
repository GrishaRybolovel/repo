import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

type GenerationObject = {
    status: boolean
    result: string
}

type CompletionModel = {
    completion_id: string;
    owner_id: number;
    keywords: string;
    status: boolean;
    filename: string;
    createdate: string; // or Date if you prefer
    query: string;
    trends: string;
    not_trends: string;
    ideas: string;
    content_strategy: string;
    average_views: string;
};

// Function to get the download URL
export function get_download_url(completion_id: string): string {
    return `${backendUrl}/generate/download/${completion_id}`;
}

// Function to trigger the download (optional)
export async function download_completion(auth_token: string, completion_id: string): Promise<void> {
    try {
        const downloadUrl = get_download_url(completion_id);

        // Optional: You can use axios to handle the download if you need more control
        const response = await axios.get(downloadUrl, {
            headers: {
                "Authorization": `Bearer ${auth_token}`,
            },
            responseType: 'blob' // Important for file downloads
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `completion_${completion_id}.zip`); // or another filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error: any) {
        throw new Error(`Downloading completion failed: ${error.response ? error.response.status : 'Unknown error'}`);
    }
}

export async function list_completions(auth_token: string): Promise<CompletionModel[]> {
    try {
        const response = await axios.get(`${backendUrl}/generate/analytics/list`, {
            headers: {
                "Authorization": `Bearer ${auth_token}`
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error(`Fetching completions failed: ${error.response ? error.response.status : 'Unknown error'}`);
    }
}

export function handleAxiosError(error: any): never {
    if (error.response) {
        const status = error.response.status;
        const message = error.response.data?.detail || "An error occurred";

        // Throw a unified error object with status and message
        throw { status, message };
    } else {
        // Throw a generic error if response is not available
        throw new Error("Fetching data failed: Unknown error");
    }
}

export async function generate_video(auth_token: string, request: string): Promise<GenerationObject> {
    try {
        const response = await axios.post(`${backendUrl}/generate/video`, { request: request }, {
            headers: {
                "Authorization": `Bearer ${auth_token}`
            }
        });
        return response.data;
    } catch (error: any) {
        handleAxiosError(error);
    }
}

export async function generate_analytics(auth_token: string, request: string): Promise<any> {
    try {
        const response = await axios.post(`${backendUrl}/generate/analytics`,
            { request: request },
            {
                headers: {
                    "Authorization": `Bearer ${auth_token}`
                },
            }
        );
        return response.data

    } catch (error: any) {
        handleAxiosError(error);
    }
}

export async function generate_shorts(auth_token: string, request: string): Promise<GenerationObject> {
    try {
        const response = await axios.post(`${backendUrl}/generate/shorts`,
            {
                request: request
            },
            {
            headers: {
                "Authorization": `Bearer ${auth_token}`
            }
        });
        return response.data;
    } catch (error:any) {
        handleAxiosError(error);
    }
}

export async function generate_seo(auth_token: string, request: string): Promise<GenerationObject> {
    try {
        const response = await axios.post(`${backendUrl}/generate/seo`, {request: request}, {
            headers: {
                "Authorization": `Bearer ${auth_token}`
            }
        });
        return response.data;
    } catch (error:any) {
        handleAxiosError(error);
    }
}