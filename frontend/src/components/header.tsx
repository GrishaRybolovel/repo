import { useState } from 'react';
import { AlignJustifyIcon, ChevronDownIcon, LogOutIcon } from "lucide-react";
import Logo from "@/icons/headerLogo.svg?react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { useTranslation } from "react-i18next"

export default function Header({ user_data, toggleSidebar }: { user_data: any, toggleSidebar: () => void }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation()
    const location = useLocation()
    const lang  = location.pathname.split('/')[1];

    const handleLogout = () => {
        localStorage.removeItem('auth');
        // localStorage.removeItem('requestHistory');
        navigate(`/${lang}/login`);
    };

    return (
        <header className="h-[12%] w-full text-black flex items-center justify-between p-4 px-0 relative">
            <AlignJustifyIcon size={30} className="lg:hidden h-full" onClick={toggleSidebar} />
            <div className="hidden h-full px-6 lg:flex flex-row items-center">
                <Logo className="w-1/3" />
                <div className="flex border text-md font-normal flex-row gap-4 w-[63vw] items-center p-2 h-fit border-secondary rounded-lg">
                    <div className="flex flex-row gap-1 justify-center w-2/3">
                        <div className="text-secondary">{t('balance')}:</div>
                        <div className="text-primary">{user_data.credit_count}</div>
                        <div>{t('credits')}</div>
                        <div className="text-secondary">|</div>
                        <div className="text-primary">{user_data.analytics_count}</div>
                        <div>{t('analytics')}</div>
                    </div>
                    <div className="border border-secondary h-10"></div>
                    <div className="flex flex-row justify-center w-1/3 gap-1">
                        <div className="text-secondary">{t('currentPlan')}</div>
                        <div className="text-primary">{user_data.rate}</div>
                    </div>
                    <div className="border border-secondary h-10"></div>
                    <Link to={`/${lang}/profile`} className="flex flex-row gap-1 h-fit justify-center text-center bg-primary text-white w-1/3 p-1 rounded-lg">
                        {t('submitRate')}
                    </Link>
                </div>
            </div>
            <div className="relative h-full flex items-center">
                <div className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <div className="rounded-full bg-[#CEDEEE] font-normal text-2xl flex items-center justify-center w-10 h-10">
                        {user_data.username[0]}
                    </div>
                    <div className="hidden lg:flex text-primary font-normal">
                        {user_data.username.split('@')[0]}
                    </div>
                    <ChevronDownIcon
                        strokeWidth={1}
                        className="cursor-pointer"
                    />
                </div>
                {isDropdownOpen && (
                    <div onClick={handleLogout} className="hover:bg-gray-100 fixed top-24 right-4 bg-white items-center justify-center px-4 font-normal flex border border-gray-200 rounded-lg shadow-lg z-50">
                        <LogOutIcon className="mr-2" />
                        <button
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {t('logout')}
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}