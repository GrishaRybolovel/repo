import {SheetIcon, FolderKanbanIcon} from "lucide-react";
import {useTranslation} from "react-i18next";
import {download_completion} from "@/api/generation.tsx";
import CompletionModel from "@/interface/interfaces.tsx";

interface CompletionProps {
    completion: {
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
    };
    handlePresentation: (completion: CompletionModel) => void;
}

export default function Completion({completion, handlePresentation}: CompletionProps) {
    const {t} = useTranslation()
    const statusText = completion.status ? t('ready') : t('inProgress');
    const query = completion.query;
    const auth_token: any = localStorage.getItem('auth')

    return (
        <div className="flex-col gap-2 flex">
            <div className="w-full flex justify-around text-black">
                <div className="self-center">
                    {new Intl.DateTimeFormat('ru-RU').format(new Date(completion.createdate))}
                </div>
                <div
                    className={`self-center p-2 rounded-xl font-light ${completion.status ? 'bg-[#82F599]' : 'bg-[#FFC107]'}`}>
                    {statusText}
                </div>
                <textarea
                    className="resize-none bg-transparent text-black border border-gray-400 p-2"
                    cols={20}
                    rows={4}
                    value={query}
                    readOnly
                />
                <div className={`self-center bg-primary ${completion.status && "rounded-lg p-1 text-white"}`}>
                    {completion.status &&
                        <SheetIcon
                            className="cursor-pointer"
                            onClick={() => download_completion(auth_token, completion.completion_id)}
                        />
                    }
                </div>
                <div className={`self-center bg-primary ${completion.status && "rounded-lg p-1 text-white"}`}>
                    {completion.status &&
                        <FolderKanbanIcon
                            className="cursor-pointer"
                            onClick={() => handlePresentation(completion)}
                        />
                    }
                </div>
            </div>
            <div className="border">
            </div>
        </div>
    );
}
