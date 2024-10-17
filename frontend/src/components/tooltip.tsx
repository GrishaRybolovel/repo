import { useState } from 'react';
import { InfoIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";

// Define custom renderers for Markdown
const MarkdownComponents:any = {
  p: ({ children }:{children:any}) => <p className="mb-2">{children}</p>,
};

const Tooltip = ({ text }:{text:any}) => {
  const [isVisible, setIsVisible] = useState<any>(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-pointer text-secondary"
      >
        <InfoIcon />
      </div>
      {isVisible && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[50vh] bg-gray-800 text-white text-sm rounded-lg p-2 shadow-lg z-10">
          <ReactMarkdown components={MarkdownComponents}>
            {text}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
