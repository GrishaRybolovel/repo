import CollapsibleBlock from "@/components/collapsibleBlock.tsx";
import {useTranslation} from "react-i18next";

export default function FAQ(){
    const {t} = useTranslation()
    return(
        <div className="h-full max-h-full animate-fade-in overflow-y-auto w-full p-4 lg:p-10 bg-[#f3f6fc] rounded-2xl flex flex-col gap-4">
            <CollapsibleBlock icon={<div className="font-bold text-2xl">?</div>} header={t('faqAnalyticsTitle')}>
                {t('faqAnalytics')}
            </CollapsibleBlock>
            <CollapsibleBlock icon={<div className="font-bold text-2xl">?</div>} header={t('otherChannelsTitle')}>
                {t('otherChannels')}
            </CollapsibleBlock>
            <CollapsibleBlock icon={<div className="font-bold text-2xl">?</div>} header={t('faqChannelTitle')}>
                {t('faqChannel')}
            </CollapsibleBlock>
            <CollapsibleBlock icon={<div className="font-bold text-2xl">?</div>} header={t("faqPrincipialTitle")}>
                {t("faqPrincipial")}
            </CollapsibleBlock>
            <CollapsibleBlock icon={<div className="font-bold text-2xl">?</div>} header={t("faqCreditsTitle")}>
                {t("faqCredits")}
            </CollapsibleBlock>
            <CollapsibleBlock icon={<div className="font-bold text-2xl">?</div>} header={t("faqMonthTitle")}>
                {t("faqMonth")}
            </CollapsibleBlock>
            <CollapsibleBlock icon={<div className="font-bold text-2xl">?</div>} header={t("faqCreditCountTitle")}>
                {t("faqCreditCount")}
            </CollapsibleBlock>
            <CollapsibleBlock icon={<div className="font-bold text-2xl">?</div>} header={t("faqManyServicesTitle")}>
                {t("faqManyServices")}
            </CollapsibleBlock>
        </div>
    )
}