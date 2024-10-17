import { useState } from 'react';

const CollapsibleBlock = ({ icon, header, children }:{icon:any, header:any, children:any}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-full w-full mx-auto border bg-background border-purple-300 rounded-lg">
      <button
        onClick={toggleOpen}
        className="flex items-center w-full py-2 px-4 bg-background text-black rounded-md focus:outline-none"
      >
        <div className="flex items-center justify-center w-14 h-10 lg:w-10 lg:h-10 bg-primary text-white rounded-full mr-4">
          {icon}
        </div>
        <div className="flex-grow text-left text-lg font-medium text-gray-800">
          {header}
        </div>
        <div className="ml-4 transform transition-transform duration-300">
          {isOpen ? '▲' : '▼'}
        </div>
      </button>
      <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-y-auto `}>
        <div className="p-4 py-2 bg-background rounded-b-lg">
          <hr className="border-gray-300 mb-4" />
          <div className="text-gray-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleBlock;