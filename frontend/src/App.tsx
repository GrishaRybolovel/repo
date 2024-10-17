// src/App.tsx
import {useEffect, useState} from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import Login from '@/pages/login';
import Register from '@/pages/register';
import Home from '@/pages/home';
import Loader from '@/pages/loader';
import ForgotPassword from '@/pages/forgotPassword';
import {UserProvider, useUser} from "@/components/userContext.tsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const {userData, refreshUserData} = useUser();
    const access_token = localStorage.getItem('auth');
    const navigate = useNavigate();
    const location = useLocation();
    const lang = location.pathname.split('/')[1];
    const pathname = location.pathname;
    const page = location.pathname.split('/')[2];

    useEffect(() => {
        if (lang && ['en', 'ru'].includes(lang)) {
            i18n.changeLanguage(lang);
            navigate(`/${lang}/${page != undefined ? page : ""}`)
        } else {
            const pathWithoutLang = pathname.replace(/^\/(en|ru)/, '');
            navigate(`/ru${pathWithoutLang}/`, {replace: true});
        }
    }, [lang, navigate, page, pathname]);

    useEffect(() => {
        const fetchData = async () => {
            if (access_token == null) {
                if (!pathname.startsWith(`/${lang}/login`) && !pathname.startsWith(`/${lang}/register`) && !pathname.startsWith(`/${lang}/forgot-password`)) {
                    navigate(`/${lang}/login`, {replace: true});
                }
                setIsLoading(false);
            } else if (!userData) {
                try {
                    await refreshUserData();
                } catch (error) {
                    console.error("Failed to fetch user data:", error);
                }
                setIsLoading(false);
            } else {
                setIsLoading(false);  // Stop loading if user data is already available
            }
        };

        fetchData();
    }, [access_token, navigate, pathname, lang, refreshUserData]);

    if (isLoading && access_token != null) {
        return <Loader/>;
    }

    return (
        <div className="bg-background text-primary h-screen w-screen p-5 justify-center flex max-w-screen">
            <Routes>
                <Route path="/:lang/login" element={<Login/>}/>
                <Route path="/:lang/register" element={<Register/>}/>
                <Route path="/:lang/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/:lang/*" element={<Home user_data={userData}/>}/>
            </Routes>
        </div>
    );
}

export default function WrappedApp() {
    return (
        <I18nextProvider i18n={i18n}>
            <UserProvider>
                <App/>
            </UserProvider>
        </I18nextProvider>
    );
}