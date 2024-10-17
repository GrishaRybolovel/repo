import Header from "@/components/header.tsx";
import SideBar from "@/components/sidebar.tsx";
import { Route, Routes } from "react-router-dom";
import Profile from "@/pages/profile.tsx";
import { useState } from "react";
import Learning from "@/pages/learning.tsx";
import Analytics from "@/pages/analytics.tsx";
import FAQ from "@/pages/faq.tsx";
import Creativity from "@/pages/creativity.tsx";
import SeoAi from "@/pages/seoAi.tsx";
import ShowText from "@/pages/showText.tsx";
import Presentation from "@/pages/presentation.tsx";
import CompletionModel from "@/interface/interfaces.tsx";

const defaultCompletion: CompletionModel = {
    completion_id: '',
    owner_id: 0,
    keywords: '',
    status: false,
    filename: '',
    createdate: '',
    query: '',
    trends: '',
    not_trends: '',
    ideas: '',
    content_strategy: '',
    average_views: ''
};

export default function Home({ user_data }: { user_data: any }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [showText, setText] = useState(false);
    const [requestResult, setRequestResult] = useState('');
    const [showPresentation, setPresentation] = useState(false);
    const [currentCompletion, setCurrentCompletion] = useState<CompletionModel>(defaultCompletion);

    const handleText = (result: string) => {
        setRequestResult(result);
        setText(true);
    };

    const closeText = () => {
        setText(false);
    };

    const handlePresentation = (completion: CompletionModel) => {
        console.log('presentation');
        setCurrentCompletion(completion);
        setPresentation(true);
    };

    const closePresentation = () => {
        setPresentation(false);
    };

    return (
        <>
            {user_data && (
                <div className="h-full animate-fade-in lg:gap-6 flex flex-col w-full relative max-w-full">
                    <Header user_data={user_data} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
                    <div className="flex flex-row h-full max-h-full max-w-full overflow-y-auto w-full gap-2 relative">
                        <SideBar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
                        {isSidebarOpen && (
                            <div
                                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 lg:hidden"
                                onClick={() => setIsSidebarOpen(false)}
                            ></div>
                        )}
                        <div className={`flex-1 ${isSidebarOpen ? 'blur-sm' : ''} relative z-0 max-w-1/2 w-1/2`}>
                            <Routes>
                                <Route path="/" element={<SeoAi handleText={handleText}/>} />
                                <Route path="/analytics" element={<Analytics handlePresentation={handlePresentation}/>} />
                                <Route path="/profile" element={<Profile user_data={user_data} />} />
                                <Route path="/learning" element={<Learning />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route path="/creativity" element={<Creativity />} />
                            </Routes>
                        </div>
                    </div>
                    {showText && <ShowText onClose={closeText} text={requestResult}/>}
                    {showPresentation && <Presentation onClose={closePresentation} completion={currentCompletion} />}
                </div>
            )}
        </>
    );
}
