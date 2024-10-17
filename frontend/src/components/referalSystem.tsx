import {useTranslation} from "react-i18next";

export default function ReferalSystem({ user_data }:{user_data:any}){
    const frontendUrl = import.meta.env.VITE_FRONTEND_URL
    const {t} = useTranslation();
    const link = `${frontendUrl}/register?refferer=${user_data.username}`;
    return(
        <div className="flex h-full flex-row gap-3">
            <div className="p-2 w-1/8 h-16 text-center border border-secondary text-black font-normal text-md justify-center items-center flex rounded-xl">{t('balance')}: {user_data.balance}₽</div>
            <div className='flex border border-secondary flex-col h-16 justify-center w-1/3 text-center rounded-xl font-normal text-md text-black'>
                <div>
                    {t('referalText')}
                </div>
                <a className="text-secondary" href={link}>{link}</a>
            </div>
        </div>
    )
}