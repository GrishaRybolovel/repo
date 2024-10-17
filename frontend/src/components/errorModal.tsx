import { useState, useEffect } from "react";

interface ErrorNotificationProps {
    message: string;
}

export default function ErrorNotification({ message }: ErrorNotificationProps) {
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        if (!message) return;

        // Set a timer to hide the notification after 3 seconds
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        // Cleanup the timer when the component unmounts or message changes
        return () => clearTimeout(timer);
    }, [message]);

    // If not visible, don't render the component
    if (!visible || !message) return null;

    return (
        <div
            className={`fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg transition-transform duration-300 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} z-50`}
        >
            {message}
        </div>
    );
}
