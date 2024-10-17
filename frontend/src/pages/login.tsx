import Logo from "@/icons/logo.svg?react"
import {KeyRound, MailIcon, EyeIcon, EyeOffIcon} from "lucide-react";
import {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {login} from "@/api/auth.tsx";
import {useTranslation} from "react-i18next";
import {useUser} from "@/components/userContext.tsx";

export default function Login(){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(true)
    const navigate = useNavigate()
    const path = useLocation()
    const lang  = path.pathname.split('/')[1];
    const {t} = useTranslation()
    const { refreshUserData } = useUser()

    const validateEmail = (email:string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
    }

    const login_user = async () => {
        setError("") // Clear previous errors
        if (!validateEmail(username)) {
            setIsEmailValid(false)
            setError(t('invalidEmailFormat'))
            return
        }
        setIsEmailValid(true)

        try {
            const response = await login(username, password)
            localStorage.setItem('auth', response.access_token)
            await refreshUserData()
            navigate(`/${lang}/`)
        } catch (err) {
            setError(t('loginOrPasswordInvalid'))
        }
    }

    return(
        <div className="h-full w-full animate-fade-in lg:w-[50%] md:h-1/3 lg:h-[65%] rounded-2xl self-center bg-graybg border-secondary border flex flex-col md:flex-row gap-16 md:gap-4 px-4 py-10 pt-20">
            <div className="flex flex-col md:w-1/2 md:h-1/2 md:self-center md justify-center items-center h-1/3">
                <Logo className="h-full w-full"/>
            </div>
            <div className="h-full w-full justify-center md:h-full md:w-1/2 flex-col gap-6 text-black items-center flex">
                <h1 className="font-[700] leading-6 line- text-2xl mb-4">{t('login')}</h1>
                <div className="h-1/3 w-full flex flex-col gap-3">
                    <div
                        className={`h-1/3 border items-center gap-2 ${isEmailValid ? 'border-secondary' : 'border-red-500'} p-2 bg-white w-full rounded-xl flex flex-row`}
                    >
                        <MailIcon className="text-secondary" size={30}/>
                        <input
                            placeholder="Email"
                            onChange={(event) => {setUsername(event.target.value)}}
                            className="h-full w-full border-none outline-none"
                            type="email"
                            onKeyPress={async (e) =>
                            {
                                if (e.key === "Enter"){
                                    await login_user()
                                }
                            }}
                        />
                    </div>
                    <div
                        className="h-1/3 border items-center gap-2 border-secondary p-2 bg-white w-full rounded-xl flex flex-row"
                    >
                        <KeyRound className="text-secondary" size={30}/>
                        <input
                            placeholder={t('password')}
                            onChange={(event) => {setPassword(event.target.value)}}
                            className="h-full w-full border-none outline-none"
                            type={!isPasswordVisible ? "password" : "text"}
                            onKeyPress={async (e) =>
                            {
                                if (e.key === "Enter"){
                                    await login_user()
                                }
                            }}
                        />
                        <div className="text-secondary cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                            {!isPasswordVisible ?
                                <EyeIcon size={25} strokeWidth={1.5}/>
                                :
                                <EyeOffIcon size={25} strokeWidth={1.5}/>}
                        </div>
                    </div>
                    <Link to={`/${lang}/forgot-password`} className="text-primary self-end text-lg underline-offset-2 underline">
                        {t('forgotPassword')}
                    </Link>
                </div>
                {error && <div className="text-red-500 font-normal text-sm">{error}</div>}
                <div
                    className="w-full cursor-pointer bg-primary text-white h-10 font-medium text-xl items-center justify-center flex rounded-xl"
                    onClick={login_user}
                >
                    {t('login')}
                </div>
                <div className="flex flex-row gap-3 font-medium h-10 self-start">
                    {t('notHaveAccount')}
                    <Link to={`/${lang}/register`} className="underline font-normal underline-offset-2 text-primary">
                        {t('register')}
                    </Link>
                </div>
            </div>
        </div>
    )
}