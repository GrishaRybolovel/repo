import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import {useTranslation} from "react-i18next";

interface PrivacyPolicyProps {
    onClose: () => void;
    text: string;
}

export default function ShowText({onClose, text}: PrivacyPolicyProps) {

    const {t} = useTranslation();
    const processedText = text.split('::::');
    const resultString = t('titleIdeas') + '\n\n' +
        processedText[0] + '\n\n' + t('videoDescription') + '\n\n' +
        processedText[1] + '\n\n' + processedText[2] + '\n\n' + t('tags') +
        '\n\n' + processedText[3];


    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
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
              max-height: 90vh; /* Max height relative to viewport height */
              overflow-y: auto; /* Allow scrolling if content is too long */
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for better appearance */
            }
            
            /* Close button styling */
            .close-btn {
                position: absolute; /* Fix the button position relative to the viewport */
                top: 10px;
                right: 10px;
                width: 38px;
                font-size: 20px;
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
        `
            }}/>
            <div className="popup">
                <div className="popup-content">
                    <div className="flex-row flex justify-between">
                        <div className="italic font-light active:scale-75 cursor-pointer hover:underline text-black"
                             onClick={() => navigator.clipboard.writeText(resultString)}>
                            {t('copy')}
                        </div>
                    </div>
                    <button className="close-btn flex flex-row gap-1 h-fit justify-center text-center p-1 rounded-lg bg-primary text-white" onClick={onClose}>X</button>
                    <div className="privacy pt-24">
                        <div style={{fontWeight: 'bold'}}>
                            <ReactMarkdown skipHtml={false}
                                           remarkPlugins={[remarkBreaks]}>{t('titleIdeas')}</ReactMarkdown>
                        </div>
                        <br/>
                        <ReactMarkdown skipHtml={false}
                                       remarkPlugins={[remarkBreaks]}>{processedText[0]}</ReactMarkdown>
                        <br/>
                        <div style={{fontWeight: 'bold'}}>
                            <ReactMarkdown skipHtml={false}
                                           remarkPlugins={[remarkBreaks]}>{t('videoDescription')}</ReactMarkdown>
                        </div>
                        <br/>
                        <ReactMarkdown skipHtml={false}
                                       remarkPlugins={[remarkBreaks]}>{processedText[1]}</ReactMarkdown>
                        <br/>
                        <ReactMarkdown skipHtml={false}
                                       remarkPlugins={[remarkBreaks]}>{processedText[2]}</ReactMarkdown>
                        <br/>
                        <div style={{fontWeight: 'bold'}}>
                            <ReactMarkdown skipHtml={false} remarkPlugins={[remarkBreaks]}>{t('tags')}</ReactMarkdown>
                        </div>
                        <br/>
                        <ReactMarkdown skipHtml={false}
                                       remarkPlugins={[remarkBreaks]}>{processedText[3]}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    );
}
