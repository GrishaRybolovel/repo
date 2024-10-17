import ProfileIcon from "@/icons/profileIcon.svg?react";
import { useState } from "react";
import RateList from "@/components/rateList.tsx";
import ChangePassword from "@/components/changePassword.tsx";
import ReferalSystem from "@/components/referalSystem.tsx";
import {useTranslation} from "react-i18next"; // Import the ChangePassword component

export default function Profile({ user_data }:{user_data:any}) {
    const [selectedSection, setSelectedSection] = useState('');
    const { t } = useTranslation()

    return (
        <div className="h-full max-h-full overflow-y-auto w-full bg-[#f3f6fc] rounded-2xl p-10 flex flex-col gap-10">
            <div className="flex flex-row gap-4 items-start w-full">
                <ProfileIcon className="hidden lg:flex w-48 h-48" />
                <div className="flex flex-col mt-2 gap-2 w-full font-normal text-black py-4">
                    <div>{t('login')}: {user_data.username}</div>
                    <div>{t('currentPlan')}: {user_data.rate}</div>
                    <div>{t('accesDate')}: {new Intl.DateTimeFormat('ru-RU').format(new Date(user_data.subscription_date))}</div>
                    <div className="flex gap-4 mt-4">
                        <button
                            className={`px-4 py-2 rounded ${selectedSection === 'changePassword' ? 'bg-primary text-white' : 'border border-secondary text-black'}`}
                            onClick={() => setSelectedSection('changePassword')}
                        >
                            {t('profileChangePassword')}
                        </button>
                        <button
                            className={`px-4 py-2 rounded ${selectedSection === 'rateList' ? 'bg-primary text-white' : 'border border-secondary text-black'}`}
                            onClick={() => setSelectedSection('rateList')}
                        >
                            {t('submitRate')}
                        </button>
                        <button
                            className={`px-4 py-2 rounded ${selectedSection === 'referalSystem' ? 'bg-primary text-white' : 'border border-secondary text-black'}`}
                            onClick={() => setSelectedSection('referalSystem')}
                        >
                            {t('referalSystem')}
                        </button>
                    </div>
                </div>
            </div>
            {selectedSection === 'rateList' && <RateList />}
            {selectedSection === 'changePassword' && <ChangePassword email={user_data.username}/>}
            {selectedSection === 'referalSystem' && <ReferalSystem user_data={user_data}/>}
        </div>
    );
}