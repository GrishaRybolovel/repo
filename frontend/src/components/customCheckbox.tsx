import {useState} from "react";
import {CheckIcon} from "lucide-react";

export default function CustomCheckbox({label, linkText, onLinkClick}: { label: any, linkText: any, onLinkClick: any }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="flex items-start gap-2 font-normal text-lg">
            <div
                className={`h-6 min-w-6 border-2 rounded-md ${
                    isChecked ? "border-primary bg-primary" : "border-secondary bg-white"
                } flex items-center justify-center cursor-pointer`}
                onClick={() => setIsChecked(!isChecked)}
            >
                {isChecked && <CheckIcon size={18} className="text-white"/>}
            </div>
            <div className="text-sm">
                <span>{label}</span>
                <button onClick={onLinkClick}>
                    <a target="_blank" className="text-primary underline ml-1">
                        {linkText}
                    </a>
                </button>
            </div>
        </div>
    );
}