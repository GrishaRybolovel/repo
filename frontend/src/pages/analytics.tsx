import {SendIcon} from "lucide-react";
import {useState, useEffect} from "react";
import {ClipLoader} from "react-spinners";
import {generate_analytics} from "@/api/generation.tsx";
import Tooltip from "@/components/tooltip.tsx";
import {useTranslation} from "react-i18next";
import Completion from "@/components/completion.tsx";
import {list_completions} from "@/api/generation.tsx";
import ErrorNotification from "@/components/errorModal.tsx";
import {useUser} from "@/components/userContext.tsx";

interface CompletionModel {
    completion_id: string;
    owner_id: number;
    keywords: string;
    status: boolean;
    filename: string;
    createdate: string;
    query: string;
    trends: string;
    not_trends: string;
    ideas: string;
    content_strategy: string;
    average_views: string;
}

export default function Analytics({handlePresentation}: {handlePresentation: (completion: CompletionModel) => void}) {
    const selectedTool = "SEO Optimization";
    const [completions, setCompletions] = useState<CompletionModel[]>([])
    const [request, setRequest] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const {t} = useTranslation();

    const { refreshUserData } = useUser();

    useEffect(() => {
        const fetchCompletions = async () => {
            const authToken: string | null = localStorage.getItem('auth');
            if (!authToken) {
                setError("Authentication token not found.");
                return;
            }

            setLoading(true);
            try {
                const completionsList = await list_completions(authToken);
                completionsList.sort((a, b) => new Date(b.createdate).getTime() - new Date(a.createdate).getTime());
                setCompletions(completionsList);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCompletions();
    }, []);

    const handleRequest = async () => {
        const authToken: string | null = localStorage.getItem('auth'); // Replace with your actual auth token
        if (!authToken) {
            setError("Authentication token not found.");
            return;
        }
        setError("");
        setLoading(true);

        try {
            switch (selectedTool) {
                case "SEO Optimization":
                    await generate_analytics(authToken, request);
                    if (!authToken) {
                        setError("Authentication token not found.");
                        return;
                    }

                    setLoading(true);
                    setTimeout(async () => {
                        const completionsList = await list_completions(authToken);
                        setCompletions(completionsList);

                        await refreshUserData();
                    });
            }
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !loading) {
            handleRequest();
        }
    };

    return (
        <div
            className="h-full max-h-full animate-fade-in overflow-y-auto w-full bg-[#f3f6fc] rounded-2xl p-10 flex flex-col gap-10">
            <div className="flex h-fit flex-col-reverse lg:flex-row gap-12">
                <div
                    className="h-[100%] items-center flex-row gap-4 flex px-4 py-2 border border-secondary w-full lg:w-[75%] rounded-lg">
                    <input
                        placeholder={`${selectedTool == 'SEO Optimization' ? t('analyticsInput') : "Пришлите описание сценария"}`}
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
                    <Tooltip text={t('analyticsTip')}/>
                </div>
            </div>
            <div
                className="h-[90%] overflow-y-auto w-full lg:w-[75%] border border-secondary rounded-lg flex flex-col gap-4 items-start p-4">
                <div className="font-bold text-black text-xl mb-2">
                    {t('requestHistory')}
                </div>
                <ul className="flex w-full flex-col gap-5 overflow-y-aut">
                    <li className="flex w-full justify-around text-black font-bold">
                        <div className="ml-5">{t('date')}</div>
                        <div className="ml-14">{t('status')}</div>
                        <div className="ml-14">{t('query')}</div>
                        <div className="">{t('file')}</div>
                        <div className="">{t('presentation')}</div>
                    </li>

                    {loading ? (
                        <ClipLoader size={20} color={"#000000"}/>
                    ) : completions.length > 0 ? (
                        completions.map((completion) => (
                            <Completion
                                key={completion.completion_id}
                                completion={completion}
                                handlePresentation={handlePresentation}
                            />
                        ))
                    ) : (
                        <div className="text-black">No completions found.</div>
                    )}
                </ul>
            </div>
            {error && <ErrorNotification message={error}/>}
        </div>
    );
}
