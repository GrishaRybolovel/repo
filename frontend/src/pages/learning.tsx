import CollapsibleBlock from "@/components/collapsibleBlock.tsx";
import {ChartLineIcon, ClipboardPenIcon, DatabaseZapIcon, EyeIcon, LightbulbIcon, PenIcon} from "lucide-react";
import YouTubePlayer from "@/components/videoComponent.tsx";
import ReactMarkdown from "react-markdown";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import React from "react";

const MarkdownComponents: any = {
    p: ({children}: { children: any }) => {
        const containsImage = React.Children.toArray(children).some((child: any) => {
            if (React.isValidElement(child)) {
                const elementType = child.type;
                return (
                    elementType === 'img' ||
                    (typeof elementType === 'function' && elementType.name === 'img')
                );
            }
            return false;
        });

        return (
            <p className={`mb-2 mt-5 ${containsImage ? 'grid mb-10 grid-cols-1 lg:grid-cols-2 gap-10' : ''}`}>
                {children}
            </p>
        );
    },
    a: ({children}: { children: any }) => (
        <a className="text-primary inline">
            {children}
        </a>
    ),
    ul: ({children}: { children: any }) => <ul className="list-disc pl-4">{children}</ul>,
    h3: ({children}: { children: any }) => <h3 className="font-bold">{children}</h3>,
    li: ({children}: { children: any }) => <li className="mb-1">{children}</li>,
    strong: ({children}: { children: any }) => <strong className="font-bold">{children}</strong>,
    img: ({src, alt, title}: { src: string; alt: string; title?: string }) => (
        <img src={src} alt={alt} title={title} className="max-w-full h-full m-2" style={{
            maxHeight: '400px', // Adjust this value as needed
            height: 'auto', // Maintain aspect ratio
            objectFit: 'contain', // Adjust image fitting
        }}/>
    ),
};


export default function Learning() {
    const location = useLocation()
    const lang = location.pathname.split('/')[1];
    const {t} = useTranslation()
    return (
        <div
            className="h-full max-h-full animate-fade-in overflow-y-auto w-full p-4 lg:p-10 bg-[#f3f6fc] rounded-2xl flex flex-col gap-4">
            {lang == "ru" && <CollapsibleBlock icon={<LightbulbIcon/>}
                                               header="Пошаговая стратегия канала с полного нуля на YouTube ">
                <ReactMarkdown components={MarkdownComponents}>
                    {`**Видеоурок с подробными рекомендациями и инструкциями: как запустить канал и начать получать клиентов с платформы. В уроке вы узнаете:**
                    - Какой путь стоит пройти, чтобы получить результат
                    - Как выбрать удачные идеи видео
                    - Как создать воронку контента и прогревать аудиторию
                    - Как монетизировать видео на YouTube
                    - Как правильно сделать SEO оптимизацию
                    `}
                </ReactMarkdown>
                <YouTubePlayer/>
            </CollapsibleBlock>}

            <CollapsibleBlock icon={<ChartLineIcon/>} header={t('howToAnalyticsTitle')}>
                <ReactMarkdown components={MarkdownComponents}>
                    {t('howToTrends')}
                </ReactMarkdown>
            </CollapsibleBlock>

            <CollapsibleBlock icon={<PenIcon/>} header={t('howToScenarioTitle')}>
                <ReactMarkdown components={MarkdownComponents}>
                    {t('howToScenario')}
                </ReactMarkdown>
            </CollapsibleBlock>

            <CollapsibleBlock icon={<DatabaseZapIcon/>} header={t('howToSeoTitle')}>
                <ReactMarkdown components={MarkdownComponents}>
                    {t('howToSEO')}
                </ReactMarkdown>
            </CollapsibleBlock>

            <CollapsibleBlock icon={<ClipboardPenIcon/>} header={t('howToNamingTitle')}>
                <ReactMarkdown components={MarkdownComponents}>
                    {t('howToNaming')}
                </ReactMarkdown>
            </CollapsibleBlock>

            <CollapsibleBlock icon={<EyeIcon/>} header={t('howToThumbnailTitle')}>
                <ReactMarkdown components={MarkdownComponents}>
                    {t('howToPreview')}
                </ReactMarkdown>
            </CollapsibleBlock>
        </div>
    );
}
