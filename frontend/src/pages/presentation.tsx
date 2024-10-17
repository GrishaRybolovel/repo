import CompletionModel from "src/interface/interfaces.tsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";

interface PrivacyPolicyProps {
    onClose: () => void;
    completion: CompletionModel;
}

interface Trend {
    name: string;
    description: string;
    explanation: string;
    examples: string[];
}

interface Idea {
    link: string;
    idea: string;
    number_of_views: number;
    effectiveness: string;
}

interface ContentStrategy {
    videos_to_get_more_subscribers: { name: string; link: string }[];
    video_to_warmup_audience: { name: string; link: string }[];
    videos_to_sell_me_services: { name: string; link: string }[];
}

interface AverageViewsData {
    average_week?: number;
    average_month?: number;
    average_year?: number;
}

function TrendDisplay({completion}: { completion: CompletionModel }) {
    const {t} = useTranslation();

    let trends: Trend[] = [];
    try {
        trends = JSON.parse(completion.trends);
        console.log(trends);
    } catch (error) {
        console.error('Error parsing trends:', error);
    }

    return (
        <div>
            {trends.map((trend, index) => (
                <div key={index}>
                    <p className="slide-header">{`${t('trend')} №${index + 1} - ${trend.name}`}</p>
                    <p><strong>{t('description')}:</strong> {trend.description}</p>
                    <p><strong>{t('explanation')}:</strong> {trend.explanation}</p>
                    <p><strong>{t('examples')}:</strong></p>
                    <ul>
                        {trend.examples.map((example, i) => (
                            // Check if the current index is even and if i + 1 fits in the array (exists)
                            i % 2 === 0 && i + 1 < trend.examples.length && (
                                <li key={i}>
                                    <a href={trend.examples[i + 1]} target="_blank" rel="noopener noreferrer">
                                        {example}
                                    </a>
                                </li>
                            )
                        ))}
                    </ul>
                    <br/>
                </div>
            ))}
        </div>
    );
}

// function BadTrendDisplay({completion}: { completion: CompletionModel }) {
//     const {t} = useTranslation();
//
//     let badTrends: Trend[] = [];
//     try {
//         badTrends = JSON.parse(completion.not_trends);
//     } catch (error) {
//         console.error('Error parsing not_trends:', error);
//     }
//
//     return (
//         <div>
//             {badTrends.map((trend, index) => (
//                 <div key={index}>
//                     <p className="slide-header">{`${t('trend')} №${index + 1} - ${trend.name}`}</p>
//                     <p><strong>{t('description')}:</strong> {trend.description}</p>
//                     <p><strong>{t('explanation')}:</strong> {trend.explanation}</p>
//                     <p><strong>{t('examples')}:</strong></p>
//                     <ul>
//                         {trend.examples.map((example, i) => (
//                             <li key={i}>
//                                 <a href={example} target="_blank" rel="noopener noreferrer">
//                                     {example}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                     <br/>
//                 </div>
//             ))}
//         </div>
//     );
// }

function EffectiveVideosTable({completion}: { completion: CompletionModel }) {
    const {t} = useTranslation();

    let effectiveVideos: Idea[] = [];
    try {
        effectiveVideos = JSON.parse(completion.ideas);
    } catch (error) {
        console.error('Error parsing ideas:', error);
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>{t('videoTitle')}</th>
                    <th>{t('viewingResults')}</th>
                    <th>{t('effectiveness')}</th>
                </tr>
                </thead>
                <tbody>
                {effectiveVideos.map((video, index) => (
                    <tr key={index}>
                        <td>
                            <a href={video.link} target="_blank" rel="noopener noreferrer">
                                {video.idea}
                            </a>
                        </td>
                        <td>{video.number_of_views}</td>
                        <td>{video.effectiveness}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function ContentStrategyTable({completion}: { completion: CompletionModel }) {
    const {t} = useTranslation();

    let contentStrategy: ContentStrategy[] = [];
    try {
        contentStrategy = JSON.parse(completion.content_strategy);
    } catch (error) {
        console.error('Error parsing content strategy:', error);
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>{t('videosToGetViews')}</th>
                    <th>{t('videosToMakeAudienceLoyal')}</th>
                    <th>{t('videosToSell')}</th>
                </tr>
                </thead>
                <tbody>
                {contentStrategy.map((strategy, index) => (
                    <tr key={index}>
                        <td>
                            <ul>
                                {strategy.videos_to_get_more_subscribers.map((video, videoIndex) => (
                                    <li key={videoIndex} style={{marginBottom: "10px"}}>
                                        {videoIndex + 1}. {video.name}
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td>
                            <ul>
                                {strategy.video_to_warmup_audience.map((video, videoIndex) => (
                                    <li key={videoIndex} style={{marginBottom: "10px"}}>
                                        {videoIndex + 1}. {video.name}
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td>
                            <ul>
                                {strategy.videos_to_sell_me_services.map((video, videoIndex) => (
                                    <li key={videoIndex} style={{marginBottom: "10px"}}>
                                        {videoIndex + 1}. {video.name}
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function AverageViews({completion}: { completion: CompletionModel }) {
    const {t} = useTranslation();

    let averageViews: AverageViewsData = {};

    try {
        averageViews = JSON.parse(completion.average_views)[0];
    } catch (error) {
        console.error('Error parsing average views:', error);
    }

    return (
        <div>
            <h2>{t('averageVideoViews')}</h2>
            <p>{t('lastWeek')}: {averageViews.average_week || 'N/A'}</p>
            <p>{t('lastMonth')}: {averageViews.average_month || 'N/A'}</p>
            <p>{t('lastYear')}: {averageViews.average_year || 'N/A'}</p>
        </div>
    );
}

export default function Presentation({onClose, completion}: PrivacyPolicyProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const {t} = useTranslation();
    // Define the slide contents
    const slides = [
        <div>
            <h3 className="slide-header">{t('dataAboutYourProject')}</h3>
            <br/>
            <p className="slide-header">{t('yourRequest')}</p>
            <p>{completion.query}</p>
            <br/>
            <p className="slide-header">{t('yourRequestMightBeDescribed')}</p>
            <p>{completion.keywords}</p>
        </div>,
        <div>
            <h3 className="slide-header">{t('sevenKeyTrends')}</h3>
            <br/>
            <TrendDisplay completion={completion}/>
            <br/>
        </div>,
        // <div>
        //     <h3 className="slide-header">{t('badTrends')}</h3>
        //     <br/>
        //     <BadTrendDisplay completion={completion}/>
        //     <br/>
        // </div>,
        <div>
            <h3 className="slide-header">{t('mostEffectiveIdeas')}</h3>
            <br/>
            <EffectiveVideosTable completion={completion}/>
            <br/>
        </div>,
        <div>
            <h3 className="slide-header">{t('contentStrategy')}</h3>
            <br/>
            <ContentStrategyTable completion={completion}/>
            <br/>
        </div>,
        <div>
            <h3 className="slide-header">{t('averageViews')}</h3>
            <br/>
            <AverageViews completion={completion}/>
            <br/>
        </div>
    ];

    // Functions to handle navigation between slides
    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);
        }
    };

    const handlePrevious = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(slides.length - 1);
        }
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html:
                    `
                    .popup {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.5); /* Dark background with some transparency */
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000; /* Ensure the popup is above other content */
                    }
                    
                    /* Styles for the popup content container */
                    .popup-content {
                        background: white;
                        padding: 20px;
                        border-radius: 8px;
                        position: relative;
                        max-width: 800px; /* Adjust max width as needed */
                        width: 90%; /* Responsive width */
                        height: 90vh; /* Max height relative to viewport height */
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for better appearance */
                        align-items: center; /* Center vertically */
                        justify-content: center; /* Center horizontally */
                    }
                    
                    /* Close button styling */
                    .close-btn {
                        position: absolute; /* Fix the button position relative to the viewport */
                        top: 10px;
                        right: 10px;
                        font-size: 20px;
                        width: 38px;
                        cursor: pointer;
                        z-index: 2; /* Ensure the close button is always on top */
                    }
                    
                    /* Privacy content styles */
                    .privacy {
                        font-size: 16px; /* Adjust font size for readability */
                        color: #333; /* Dark color for text */
                        line-height: 1.5; /* Improve readability */
                        padding: 20px; /* Ensure padding around the content */
                        box-sizing: border-box; /* Include padding and border in element's total width and height */
                        background-color: #e5effa;
                        border: 2px solid #ddd;
                        border-radius: 12px;
                        width: 100%;
                        height: 80%;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        position: relative;
                        margin-bottom: 20px;
                        overflow-y: auto; /* Allow scrolling if content is too long */
                    }
                    
                    /* Heading styling inside privacy content */
                    .privacy .second-title {
                        font-size: 24px; /* Larger font size for headings */
                        margin-bottom: 20px; /* Space below the heading */
                        text-align: left; /* Align text to the left */
                    }
                    
                    /* Additional styles for links */
                    .privacy a {
                        color: #007bff; /* Primary link color */
                        text-decoration: underline; /* Underline links for better visibility */
                    }
                    
                    /* Ensure correct styling for preformatted text blocks */
                    .privacy pre {
                        white-space: pre-wrap; /* Ensure proper wrapping of preformatted text */
                    }
                    
                    .navigation-menu {
                        display: flex;
                        justify-content: center;
                        gap: 10px;
                        margin-bottom: 20px;
                    }
                    
                    .navigation-buttons {
                        display: flex;
                        justify-content: center; /* Center the buttons horizontally */
                        gap: 10px; /* Space between buttons */
                        margin-bottom: 20px;
                        flex-direction: row; /* Ensure buttons are in a row */
                    }
                    
                    .navigation-button {
                        width: 32px;
                    }
                    
                    .slide-btn {
                        padding: 5px 10px;
                        border: 1px solid #ccc;
                        background-color: white;
                        cursor: pointer;
                    }
                    
                    .slide-btn.active {
                        background-color: #007BFF;
                        color: white;
                    }
                    
                    .slide-header {
                        margin-bottom: 20px;
                        font-weight: bold; /* This makes the text bold */
                        font-size: 18px;
                    }
                    `
            }}/>
            <div className="popup">
                <div className="popup-content">
                    <div className="flex-row flex justify-between">
                    </div>
                    <button
                        className="close-btn flex flex-row gap-1 h-fit justify-center text-center p-1 rounded-lg bg-primary text-white"
                        onClick={onClose}>X
                    </button>
                    <div className="navigation-menu">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`navigation-button flex flex-row gap-1 h-fit justify-center text-center p-1 rounded-lg ${currentSlide === index ? 'bg-primary text-white' : ''}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <div className="privacy pt-24">
                        {/* Slide content */}
                        <div className="slide-content">
                            <p>{slides[currentSlide]}</p>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="navigation-buttons">
                        <button
                            onClick={handlePrevious}
                            className="flex flex-row gap-1 h-fit justify-center text-center p-1 rounded-lg bg-primary text-white"
                        >
                            {t('previous')}
                        </button>

                        <button
                            onClick={handleNext}
                            className="flex flex-row gap-1 h-fit justify-center text-center p-1 rounded-lg bg-primary text-white"
                        >
                            {t('next')}
                        </button>
                    </div>

                    {/* Slide indicators */}
                    <div className="navigation-buttons">
                        <p>{t('slide')} {currentSlide + 1} {t('of')} {slides.length}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
