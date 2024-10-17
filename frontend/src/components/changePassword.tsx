import { useState } from "react";
import { resetPassword, forgotPassword } from "@/api/forgotPassword.tsx";
import {useTranslation} from "react-i18next";

export default function ChangePassword({ email }:{email:any}) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [code, setCode] = useState('');
    const [codeId, setCodeId] = useState<number | null>(null);
    const [stage, setStage] = useState('changePassword'); // changePassword, enterCode
    const {t} = useTranslation()

    const handleForgotPassword = async () => {
        console.log(email)
        try {
            const response = await forgotPassword(email);
            setCodeId(response.code_id);
            setStage('enterCode');
        } catch (error) {
            console.error('Failed to send forgot password request:', error);
        }
    };

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await resetPassword(Number(codeId), Number(code), newPassword);
            alert(response.message);
            setStage('changePassword');
            setNewPassword('');
            setConfirmPassword('');
            setCode('');
        } catch (error) {
            console.error('Failed to reset password:', error);
        }
    };

    return (
        <div className="flex flex-col gap-4 w-full lg:w-1/2 ">
            {stage === 'changePassword' && (
                <>
                    <input
                        type="password"
                        placeholder={t('inputPassword')}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="p-2 border border-secondary rounded"
                    />
                    <input
                        type="password"
                        placeholder={t('repeatPassword')}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="p-2 border border-secondary rounded"
                    />
                    <button
                        onClick={handleForgotPassword}
                        className="px-4 py-2 bg-primary text-white rounded mt-4"
                    >
                        {t('sendCode')}
                    </button>
                </>
            )}
            {stage === 'enterCode' && (
                <>
                    <input
                        type="text"
                        placeholder={t('enterCode')}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="p-2 border border-secondary rounded"
                    />
                    <button
                        onClick={handleResetPassword}
                        className="px-4 py-2 bg-primary text-white rounded mt-4"
                    >
                        {t('refreshPassword')}
                    </button>
                </>
            )}
        </div>
    );
}