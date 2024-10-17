import {BookOpenTextIcon, BrainIcon, ChartPieIcon, CircleUserIcon, XIcon, ChartNoAxesCombinedIcon, NotebookPenIcon} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"

export default function SideBar({ isOpen, closeSidebar }: { isOpen: boolean, closeSidebar?: () => void }) {
    const location = useLocation();
    const pathname = location.pathname.replace('en/', '').replace('ru/', '');
    const { t } = useTranslation()
    const lang  = location.pathname.split('/')[1];

    const getLinkClass = (path: any) => {
        return pathname === path
            ? "p-2 bg-primary flex flex-row gap-2 items-center text-white w-full rounded-xl font-normal"
            : "p-2 text-secondary flex flex-row gap-2 items-center w-full rounded-xl font-normal";
    };

    return (
        <aside className={`fixed w-4/5 top-0 left-0 h-full lg:relative lg:min-w-1/6 lg:w-1/6 lg:max-w-1/6 px-6 bg-white lg:bg-background z-50 flex flex-col gap-10 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
            <div className="flex justify-end p-4 lg:hidden">
                <XIcon size={30} className="cursor-pointer" onClick={closeSidebar} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-primary font-bold">
                    {t('aiStudio')}
                </div>
                <div className="flex flex-col gap-2">
                    <Link to={`/${lang}`} className={getLinkClass("/")} onClick={closeSidebar}>
                        <BrainIcon />
                        {t('seoAi')}
                    </Link>
                    <Link to={`/${lang}/analytics`} className={getLinkClass("/analytics")} onClick={closeSidebar}>
                        <ChartPieIcon />
                        {t('analyticsSidebar')}
                    </Link>
                    <div className="p-2 text-secondary flex flex-row gap-2 items-center w-full rounded-xl font-normal">
                        <NotebookPenIcon />
                        {t('auditSidebar')}
                    </div>
                    <Link to={`/${lang}/creativity`} className={getLinkClass("/creativity")} onClick={closeSidebar}>
                        <ChartNoAxesCombinedIcon />
                        {t('creativitySidebar')}
                    </Link>
                </div>
            </div>
            <div className="border border-secondary"></div>
            <div className="flex flex-col gap-2">
                <div className="text-primary font-bold">
                    {t('user')}
                </div>
                <div className="flex flex-col gap-2">
                    <Link to={`/${lang}/profile`} className={getLinkClass("/profile")} onClick={closeSidebar}>
                        <CircleUserIcon />
                        {t('profileSidebar')}
                    </Link>
                    <Link to={`/${lang}/learning`} className={getLinkClass("/learning")} onClick={closeSidebar}>
                        <BookOpenTextIcon />
                        {t('learning')}
                    </Link>
                </div>
            </div>
            <div className="border border-secondary"></div>
            <div className="flex flex-col gap-2 mt-auto mb-2">
                <div className="text-primary font-bold">
                    {t('information')}
                </div>
                <div className="flex flex-col gap-2 text-secondary">
                    <Link to={`/${lang}/faq`} className="p-2 w-full rounded-xl font-normal">
                        FAQ
                    </Link>
                    <a href="https://t.me/fabricbothelper" className="p-2 w-full rounded-xl font-normal">
                        {t('support')}
                    </a>
                    <a href={lang == 'ru' ? "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fkhho86%2B2osxlMucyvHJcCSqz35BbWtSctwWRenhabyAlJWTPTgckyTodGSOA5xQTq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=Пользовательское%20соглашение.docx" : "https://docs.google.com/document/d/1RWYs9Unp7DmxbKkPCvv_3d5RQ9Hf3CAX2JsNbEWb8Uk/edit"} className="p-2 w-full rounded-xl font-normal">
                        {t('Agreement')}
                    </a>
                </div>
            </div>
        </aside>
    );
}