import React, { FC, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

interface CollapsibleSectionProps {
  title: string;
  children?: React.ReactNode;
}

const CollapsibleSection: FC<CollapsibleSectionProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-[#E0E0E0] rounded-[20px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 h-[66px] text-left"
      >
        <span className="font-fustat font-semibold text-[18px] leading-[26px] text-[#272B35]">
          {title}
        </span>
        <div className="flex items-center justify-center w-6 h-6 border-2 border-[#272B35] rounded-full">
          {isOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-200">
          {children || (
            <p className="text-gray-500">
              Video upload functionality can be added here.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
