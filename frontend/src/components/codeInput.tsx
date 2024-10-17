import Logo from "@/icons/logo.svg?react"
import {KeyRound} from "lucide-react";
import {login, verify, register_user} from "@/api/auth.tsx";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function CodeInput({code_id, username, password, setIsRegistered}:{code_id: number | null, username: string, password: string, setIsRegistered:any}){
    const [code, setCode] = useState<number | null>(null)
    const navigate = useNavigate()
    const location = useLocation()
    const lang  = location.pathname.split('/')[1];
    const {t} = useTranslation()

    const verify_user = async () => {
        const response = await verify(Number(code_id), Number(code))
        if (response.success){
            const response = await login(username, password)
            localStorage.setItem('auth', response.access_token)
            navigate(`/${lang}/`)
        }
    }

    const sendCode = async () => {
        const response = await register_user(username, password, null)
        code_id = response.code_id
        console.log(code_id)
    }

    return(
        <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full lg:w-[50%] max-w-4xl mx-auto p-4 lg:p-10 bg-graybg border-secondary border rounded-2xl">
            <div className="flex justify-center items-center lg:w-1/2 mb-6 lg:mb-0">
                <Logo className="w-16 h-16 lg:w-48 lg:h-48"/>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 gap-6 text-black items-center">
                <h1 className="font-bold text-2xl lg:text-3xl mb-2">{t('enterCode')}</h1>
                <h2 className="text-center mb-4">{t('emailSended')} {username}</h2>
                <div className="w-full">
                    <div className="flex items-center gap-2 border border-secondary p-2 bg-white rounded-xl">
                        <KeyRound className="text-secondary" size={30}/>
                        <input
                            onChange={(event) => setCode(Number(event.target.value))}
                            placeholder={t('enterCode')}
                            className="flex-grow border-none outline-none text-lg"
                            type="number"
                            onKeyPress={async (e) => {
                                if (e.key === "Enter") {
                                    await verify_user()
                                }
                            }}
                        />
                    </div>
                </div>
                <div
                    className="w-full cursor-pointer bg-primary text-white py-2 font-medium text-lg flex justify-center items-center rounded-xl mt-4"
                    onClick={verify_user}
                >
                    {t('login')}
                </div>
                <div
                    className="text-primary text-base cursor-pointer font-normal underline mt-4"
                    onClick={sendCode}
                >
                    {t('sendCodeAgain')}
                </div>
                <div
                    className="text-primary text-base cursor-pointer font-normal underline"
                    onClick={() => setIsRegistered(false)}
                >
                    {t('changeEmail')}
                </div>
            </div>
        </div>
    )
}
