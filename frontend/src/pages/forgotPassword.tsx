import Logo from "@/icons/logo.svg?react";
import {KeyRound, MailIcon} from "lucide-react";
import { useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { forgotPassword, resetPassword } from "@/api/forgotPassword.tsx";
import {useTranslation} from "react-i18next";

export default function ForgotPassword() {
    const [stage, setStage] = useState('enterEmail'); // enterEmail, enterCode
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [code, setCode] = useState("");
    const [codeId, setCodeId] = useState<number | null>(null);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState("");
    const location = useNavigate()
    const path = useLocation()
    const lang  = path.pathname.split('/')[1];
    const {t} = useTranslation()

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleForgotPassword = async () => {
        setError(""); // Clear previous errors
        if (!validateEmail(email)) {
            setIsEmailValid(false);
            setError("Неверный формат электронной почты");
            return;
        }
        setIsEmailValid(true);

        try {
            const response = await forgotPassword(email);
            setCodeId(response.code_id);
            setStage('enterCode');
        } catch (err) {
            setError("Ошибка при отправке запроса на сброс пароля");
        }
    };

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }

        try {
            const response = await resetPassword(Number(codeId), Number(code), newPassword);
            if (response) {
                location(`/${lang}/login`)

            } else {
                setError("Ошибка при смене пароля");
            }
        } catch (err) {
            setError("Ошибка при смене пароля");
        }
    };

    return (
        <>
            {stage === 'enterEmail' ? (
                <div className="h-full w-full animate-fade-in lg:w-[50%] md:h-1/3 lg:h-[65%] rounded-2xl self-center bg-graybg border-secondary border flex flex-col md:flex-row gap-16 md:gap-4 px-4 py-10 pt-20">
                    <div className="flex flex-col md:w-1/2 md:h-1/2 md:self-center md justify-center items-center h-1/3">
                        <Logo className="h-full w-full" />
                    </div>
                    <div className="h-full w-full md:h-full md:w-1/2 justify-center flex-col gap-6 text-black items-center flex">
                        <h1 className="font-[700] leading-6 line- text-2xl mb-4">{t('forgotPassword')}</h1>
                        <div className="h-1/3 w-full flex flex-col gap-3">
                            <div className={`h-1/3 border items-center gap-2 ${isEmailValid ? 'border-secondary' : 'border-red-500'} p-2 bg-white w-full rounded-xl flex flex-row`}>
                                <MailIcon className="text-secondary" size={30} />
                                <input
                                    placeholder="Email"
                                    className="h-full w-full border-none outline-none"
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    onKeyPress={async (e) => {
                                        if (e.key === "Enter") {
                                            await handleForgotPassword();
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        {error && <div className="text-red-500 font-normal text-sm">{error}</div>}
                        <div className="w-full cursor-pointer mt-4 bg-primary text-white h-10 font-medium text-xl items-center justify-center flex rounded-xl" onClick={handleForgotPassword}>
                            {t('sendCode')}
                        </div>
                        <div className="flex flex-row gap-3 font-medium h-10 self-start">
                            {t('rememberPassword')}
                            <Link to={`/${lang}/login`} className="underline font-normal underline-offset-2 text-primary">
                                {t('login')}
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="h-full w-full animate-fade-in lg:w-[50%] md:h-1/3 lg:h-1/2 rounded-2xl self-center bg-graybg border-secondary border flex flex-col md:flex-row gap-16 md:gap-4 px-4 py-10 pt-20">
                    <div className="flex flex-col md:w-1/2 md:h-1/2 md:scale-125 lg:scale-130 md:self-center md justify-center items-center h-1/3">
                        <Logo className="h-full w-full" />
                    </div>
                    <div className="h-full w-full md:h-full md:w-1/2 flex-col gap-6 text-black items-center flex">
                        <h1 className="font-[700] leading-6 line- text-2xl mb-4">{t('passwordChange')}</h1>
                        <div className="h-fit w-full flex flex-col gap-3">
                            <div className="h-1/3 border items-center gap-2 border-secondary p-2 bg-white w-full rounded-xl flex flex-row">
                                <KeyRound className="text-secondary" size={30} />
                                <input
                                    placeholder={t("enterCode")}
                                    className="h-full w-full border-none outline-none"
                                    value={code}
                                    onChange={(event) => setCode(event.target.value)}
                                    type="text"
                                    onKeyPress={async (e) => {
                                        if (e.key === "Enter") {
                                            await handleResetPassword();
                                        }
                                    }}
                                />
                            </div>
                            <div className="h-fit border items-center gap-2 border-secondary p-2 bg-white w-full rounded-xl flex flex-row">
                                <KeyRound className="text-secondary" size={30} />
                                <input
                                    placeholder={t('newPassword')}
                                    className="h-full w-full border-none outline-none"
                                    onChange={(event) => setNewPassword(event.target.value)}
                                    type="password"
                                    onKeyPress={async (e) => {
                                        if (e.key === "Enter") {
                                            await handleResetPassword();
                                        }
                                    }}
                                />
                            </div>
                            <div className="h-fit border items-center gap-2 border-secondary p-2 bg-white w-full rounded-xl flex flex-row">
                                <KeyRound className="text-secondary" size={30} />
                                <input
                                    placeholder={t('repeatPassword')}
                                    className="h-full w-full border-none outline-none"
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                    type="password"
                                    onKeyPress={async (e) => {
                                        if (e.key === "Enter") {
                                            await handleResetPassword();
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        {error && <div className="text-red-500 font-normal text-sm">{error}</div>}
                        <div className="w-full cursor-pointer mt-4 bg-primary text-white h-10 font-medium text-xl items-center justify-center flex rounded-xl" onClick={handleResetPassword}>
                            {t('refreshPassword')}
                        </div>
                        <div className="flex flex-row gap-3 font-medium h-10 self-start">
                            {t('rememberPassword')}
                            <Link to={`/${lang}/login`} className="underline font-normal underline-offset-2 text-primary">
                                {t('login')}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}