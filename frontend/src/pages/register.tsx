import Logo from "@/icons/logo.svg?react";
// import {KeyRound, MailIcon, EyeIcon, EyeOffIcon, UserIcon} from "lucide-react";
import {KeyRound, MailIcon, EyeIcon, EyeOffIcon} from "lucide-react";
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {register_user} from "@/api/auth.tsx";
import CodeInput from "@/components/codeInput.tsx";
import {useTranslation} from "react-i18next";
import CustomCheckbox from "@/components/customCheckbox.tsx";
import PrivacyPolicy from "@/pages/privacyPolicy.tsx";
import Terms from "@/pages/terms.tsx";
import Cookie from "@/pages/cookie.tsx";

export default function Register() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const referrerFromQuery = queryParams.get('referrer') || null;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [codeId, setCodeId] = useState<number | null>(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [referrer] = useState<string | null>(referrerFromQuery);
    const lang = location.pathname.split('/')[1] as 'en' | 'ru';
    const {t} = useTranslation();
    const [showPolicy, setPolicy] = useState(false);
    const [showTerms, setTerms] = useState(false);
    const [showCookie, setCookie] = useState(false);

    const handlePolicy = () => {
        setPolicy(true);
    };

    const closePolicy = () => {
        setPolicy(false);
    };

    const handleTerms = () => {
        setTerms(true);
    };

    const closeTerms = () => {
        setTerms(false);
    };

    const handleCookie = () => {
        setCookie(true);
    };

    const closeCookie = () => {
        setCookie(false);
    };

    const validateEmail = (email: any) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const register = async () => {
        setError(""); // Clear previous errors
        if (!validateEmail(username)) {
            setIsEmailValid(false);
            setError(t('invalidEmailFormat'));
            return;
        }
        setIsEmailValid(true);

        try {
            const response = await register_user(username, password, referrer);
            if (response.success) {
                setCodeId(Number(response.code_id));
                setIsRegistered(true);
            } else {
                setError(response.success || t("registrationError"));
            }
        } catch (err) {
            setError(t("registrationError"));
        }
    };

    return (
        <>
            {!isRegistered ?
                <div
                    className="h-fit w-full animate-fade-in lg:w-[50%] md:h-1/3 lg:h-fit rounded-2xl self-center bg-graybg border-secondary border flex flex-col md:flex-row gap-16 md:gap-4 px-4 py-10 pt-20">
                    <div
                        className="flex flex-col md:w-1/2 md:h-1/2 md:self-center md justify-center items-center h-1/3">
                        <Logo className="h-full w-full"/>
                    </div>
                    <div className="h-full w-full md:h-full md:w-1/2 flex-col gap-6 text-black items-center flex">
                        <h1 className="font-[700] leading-6 line- text-2xl mb-4">{t('register')}</h1>
                        <div className="h-1/3 w-full flex flex-col gap-3">
                            <div
                                className={`h-1/3 border items-center gap-2 ${isEmailValid ? 'border-secondary' : 'border-red-500'} p-2 bg-white w-full rounded-xl flex flex-row`}
                            >
                                <MailIcon className="text-secondary" size={30}/>
                                <input
                                    placeholder="Email"
                                    className="h-full w-full border-none outline-none"
                                    onChange={(event) => {
                                        setUsername(event.target.value)
                                    }}
                                    type="email"
                                    onKeyPress={async (e) => {
                                        if (e.key === "Enter") {
                                            await register();
                                        }
                                    }}
                                />
                            </div>
                            <div
                                className="h-1/3 border items-center gap-2 border-secondary p-2 bg-white w-full rounded-xl flex flex-row"
                            >
                                <KeyRound className="text-secondary" size={30}/>
                                <input
                                    placeholder={t("password")}
                                    className="h-full w-full border-none outline-none"
                                    type={!isPasswordVisible ? "password" : "text"}
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                    }}
                                    onKeyPress={async (e) => {
                                        if (e.key === "Enter") {
                                            await register();
                                        }
                                    }}
                                />
                                <div className="text-secondary cursor-pointer"
                                     onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    {!isPasswordVisible ?
                                        <EyeIcon size={25} strokeWidth={1.5}/>
                                        :
                                        <EyeOffIcon size={25} strokeWidth={1.5}/>}
                                </div>
                            </div>
                            {/*<div*/}
                            {/*    className="h-1/3 border items-center gap-2 border-secondary p-2 bg-white w-full rounded-xl flex flex-row"*/}
                            {/*>*/}
                            {/*    <UserIcon className="text-secondary" size={30}/>*/}
                            {/*    <input*/}
                            {/*        placeholder={t('refferer')}*/}
                            {/*        className="h-full w-full border-none outline-none"*/}
                            {/*        onChange={(event) => {*/}
                            {/*            setReferrer(event.target.value)*/}
                            {/*        }}*/}
                            {/*        type="text"*/}
                            {/*        onKeyPress={async (e) => {*/}
                            {/*            if (e.key === "Enter") {*/}
                            {/*                await register();*/}
                            {/*            }*/}
                            {/*        }}*/}
                            {/*    />*/}
                            {/*</div>*/}
                        </div>
                        {error && <div className="text-red-500 font-normal text-sm">{error}</div>}
                        <div className="flex flex-col gap-2">
                            <CustomCheckbox label={t('privacyAgree')} linkText={t('privecyAgreeLink')}
                                            onLinkClick={handlePolicy}/>
                            <CustomCheckbox label={t('privacyAgree')} linkText={t('userAgreeLink')}
                                            onLinkClick={handleTerms}/>
                            <CustomCheckbox label={t('cookiesAgree')} linkText={t('cookiesAgreeLink')}
                                            onLinkClick={handleCookie}/>
                            <CustomCheckbox label={t("agreeMessage")} linkText="" onLinkClick={handleCookie}/>
                        </div>
                        <div
                            className="w-full cursor-pointer mt-4 bg-primary text-white h-10 font-medium text-xl items-center justify-center flex rounded-xl"
                            onClick={register}
                        >
                            {t('register')}
                        </div>
                        <div className="flex flex-row gap-3 font-medium h-10 self-start">
                            {t('rememberPassword')}
                            <Link to={`/${lang}/login`}
                                  className="underline font-normal underline-offset-2 text-primary">
                                {t('login')}
                            </Link>
                        </div>
                    </div>
                    {showPolicy && <PrivacyPolicy onClose={closePolicy} lang={lang}/>}
                    {showTerms && <Terms onClose={closeTerms} lang={lang}/>}
                    {showCookie && <Cookie onClose={closeCookie} lang={lang}/>}
                </div> :
                <CodeInput code_id={codeId} username={username} password={password} setIsRegistered={setIsRegistered}/>}
        </>
    );
}