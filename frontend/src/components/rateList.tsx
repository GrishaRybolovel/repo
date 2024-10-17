import { createPayment } from "@/api/payments.tsx";
import {useTranslation} from "react-i18next";

export default function RateList() {
    const {t} = useTranslation()

    const handlePayment = async (rate:any) => {
        try {
            const response = await createPayment(rate);
            if (response.status) {
                window.location.href = response.payment_link;
            } else {
                alert("Failed to create payment. Please try again.");
            }
        } catch (error) {
            console.error('Failed to create payment:', error);
        }
    };

    return (
        <>
            <div className="flex gap-4 mt-4 flex-col lg:flex-row w-full">
                <div
                    className="p-4 w-full lg:w-1/2 cursor-pointer border flex flex-col border-purple-300 gap-2 text-black font-normal rounded-xl text-center"
                    onClick={() => handlePayment(1)}
                >
                    <div className="font-bold text-black">{t('author')}</div>
                    <div>1 {t('analyticsPerMounth')}</div>
                    <div>30 {t('creditsPerMounth')}</div>
                    <div className="p-3 bg-primary mt-auto rounded-lg text-white text-xl font-bold">{t('authorPrice')}</div>
                </div>
                <div
                    className="p-4 w-full lg:w-1/2 cursor-pointer border flex flex-col border-purple-300 gap-2 text-black font-normal rounded-xl text-center"
                    onClick={() => handlePayment(2)}
                >
                    <div className="font-bold text-black">{t('creator')}</div>
                    <div>3 {t('analyticsPerMounth')}</div>
                    <div>100 {t('creditsPerMounth')}</div>
                    <div className="p-3 bg-primary mt-auto rounded-lg text-white text-xl font-bold">{t('creatorPrice')}</div>
                </div>
                <div
                    className="p-4 w-full lg:w-1/2 cursor-pointer border flex flex-col h-[300px] gap-2 border-purple-300 text-black font-normal rounded-xl text-center"
                    onClick={() => handlePayment(3)}
                >
                    <div className="font-bold">{t('agency')}</div>
                    <div>7 {t('analyticsPerMounth')}</div>
                    <div>300 {t('creditsPerMounth')}</div>
                    <div>{t('personalManager')}</div>
                    <div className="p-3 bg-primary mt-auto rounded-lg text-white text-xl font-bold">{t('agencyPrice')}</div>
                </div>
            </div>
            <div className="text-gray-500 mt-4">
                {t('profileTip')}
            </div>
        </>
    );
}