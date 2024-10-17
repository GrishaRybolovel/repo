import {SendIcon} from "lucide-react";
import {useState, useEffect} from "react";
import ReactMarkdown from 'react-markdown';
import {ClipLoader} from "react-spinners";
import {generate_video, generate_seo, generate_shorts} from "@/api/generation.tsx";
import Tooltip from "@/components/tooltip.tsx";
import {useTranslation} from "react-i18next"
import ErrorNotification from "@/components/errorModal.tsx";

interface HistoryItem {
    request: string;
    result: string;
}

interface History {
    seo: HistoryItem[];
    video: HistoryItem[];
    shorts: HistoryItem[];
}

export default function AiTools() {
    const [selectedTool, setSelectedTool] = useState<string>("SEO Optimization");
    const [request, setRequest] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [history, setHistory] = useState<History>({
        seo: [],
        video: [],
        shorts: []
    });
    const {t} = useTranslation()

    useEffect(() => {
        try {
            const savedHistory = localStorage.getItem('requestHistory');
            if (savedHistory) {
                const parsedHistory: History = JSON.parse(savedHistory);
                setHistory({
                    seo: Array.isArray(parsedHistory.seo) ? parsedHistory.seo : [],
                    video: Array.isArray(parsedHistory.video) ? parsedHistory.video : [],
                    shorts: Array.isArray(parsedHistory.shorts) ? parsedHistory.shorts : [],
                });
            }
        } catch (e) {
            console.error("Failed to load history from local storage", e);
        }
    }, []);

    const handleRequest = async () => {
        const authToken: string | null = localStorage.getItem('auth'); // Replace with your actual auth token
        if (!authToken) {
            setError("Authentication token not found.");
            return;
        }
        setError("");
        setResult("");
        setLoading(true);

        try {
            let response;
            switch (selectedTool) {
                case "SEO Optimization":
                    response = await generate_seo(authToken, request);
                    updateHistory("seo", response.result);
                    break;
                case "Video Script":
                    response = await generate_video(authToken, request);
                    updateHistory("video", response.result);
                    break;
                case "Shorts Script":
                    response = await generate_shorts(authToken, request);
                    updateHistory("shorts", response.result);
                    break;
                default:
                    return;
            }

            setResult(response.result);
        } catch (err: any) {
            if (err.status === 403) {
                switch (err.message) {
                    case "Subscription expired":
                        setError(t('subscriptionExpired'));
                        break;
                    case "Not enough credits":
                        setError(t('notEnoughCredits'));
                        break;
                    case "Not enough analytics":
                        setError(t('notEnoughAnalytics'));
                        break;
                    default:
                        setError(t('unknownError'));
                        break;
                }
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError(t('unknownError'))
            }
        } finally {
            setLoading(false);
        }
    };

    const updateHistory = (tool: keyof History, result: string) => {
        const currentToolHistory = Array.isArray(history[tool]) ? history[tool] : [];
        const newHistory = {
            ...history,
            [tool]: [...currentToolHistory, {request, result}]
        };
        setHistory(newHistory);
        localStorage.setItem('requestHistory', JSON.stringify(newHistory));
    };

    const getCheckText = (type: string) => {
        if (type == "SEO Optimization") {
            return t('seoTip')
        } else {
            return t('aiTip')
        }
    }

    const renderHistory = () => {
        let currentHistory: HistoryItem[] = [];
        switch (selectedTool) {
            case "SEO Optimization":
                currentHistory = history.seo;
                break;
            case "Video Script":
                currentHistory = history.video;
                break;
            case "Shorts Script":
                currentHistory = history.shorts;
                break;
            default:
                currentHistory = [];
        }
        if (!currentHistory || currentHistory.length === 0) {
            return <div className="text-secondary">No history available.</div>;
        }
        return currentHistory.map((item, index) => (
            <div key={index} className="break-all max-w-full border-b border-secondary">
                <div className="font-bold text-black truncate w-full">{item.request}</div>
                <ReactMarkdown>{item.result}</ReactMarkdown>
            </div>
        ));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !loading) {
            handleRequest();
        }
    };

    return (
        <div
            className="h-full max-h-full max-w-full animate-fade-in overflow-y-auto w-full bg-[#f3f6fc] rounded-2xl p-10 flex flex-col gap-10">
            <div
                className="border border-secondary rounded-lg flex text-lg flex-row w-full lg:w-[75%] lg:px-4 items-center h-fit p-2 justify-between">
                <div className="font-normal text-black">
                    {t('tool')}
                </div>
                <div
                    className={`font-normal p-1 transition-colors rounded-lg cursor-pointer ${
                        selectedTool === "SEO Optimization"
                            ? "text-white bg-primary"
                            : "text-secondary"
                    }`}
                    onClick={() => setSelectedTool("SEO Optimization")}
                >
                    {t('seo')}
                </div>
                <div
                    className={`font-normal p-1 transition-colors rounded-lg cursor-pointer ${
                        selectedTool === "Video Script"
                            ? "text-white bg-primary"
                            : "text-secondary"
                    }`}
                    onClick={() => setSelectedTool("Video Script")}
                >
                    {t('video')}
                </div>
                <div
                    className={`font-normal p-1 transition-colors rounded-lg cursor-pointer ${
                        selectedTool === "Shorts Script"
                            ? "text-white bg-primary"
                            : "text-secondary"
                    }`}
                    onClick={() => setSelectedTool("Shorts Script")}
                >
                    {t('shorts')}
                </div>
            </div>
            <div className="flex h-fit flex-col-reverse lg:flex-row gap-12">
                <div
                    className="h-[100%] items-center flex-row gap-4 flex px-4 py-2 border border-secondary w-full max-w-full lg:w-[75%] rounded-lg">
                    <input
                        placeholder={`${selectedTool == 'SEO Optimization' ? t('seoInput') : t('scriptInput')}`}
                        value={request}
                        onChange={(e) => setRequest(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="h-full bg-[#f3f6fc] bg-none outline-none text-black w-full"
                        disabled={loading}
                    />
                    <div
                        className="text-white p-2 bg-primary rounded-full items-center flex justify-center cursor-pointer"
                        onClick={handleRequest}
                    >
                        {loading ? (
                            <ClipLoader size={20} color={"#ffffff"}/>
                        ) : (
                            <SendIcon strokeWidth={2} size={20} className="self-center flex"/>
                        )}
                    </div>
                </div>
                <div className="self-center lg:mr-24">
                    <Tooltip text={getCheckText(selectedTool)}/>
                </div>
            </div>
            <div
                className="h-[50%] overflow-y-auto flex flex-col gap-2 w-full lg:w-[75%] max-w-full lg:max-w-[75%] border p-3 border-secondary rounded-lg">
                <div className="flex-row flex justify-between">
                    <div className="font-bold text-black">
                        {t('result')}:
                    </div>
                    <div className="italic font-light active:scale-75 cursor-pointer hover:underline text-black"
                         onClick={() => navigator.clipboard.writeText(result)}>
                        {t('copy')}
                    </div>
                </div>
                <div className="font-normal text-black max-h-[90%] overflow-y-auto">
                    {error ? `` : <ReactMarkdown>{result}</ReactMarkdown>}
                </div>
            </div>
            <div
                className="h-[30%] overflow-y-auto w-full lg:w-[75%] max-w-full lg:max-w-[75%] border border-secondary rounded-lg flex flex-col gap-4 items-start p-4">
                <div className="font-bold text-black text-xl mb-2">
                    {t('requestHistory')}
                </div>
                {renderHistory()}
            </div>
            {error && <ErrorNotification message={error} />}
        </div>
    );
}