import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import type { FC } from "react";
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
    // Updated: rounded-[14px] to match Figma spec
    <div className="bg-white border border-[#E0E0E0] rounded-[14px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        // Updated: padding and height to match spec
        className="w-full flex items-center justify-between p-5 h-[66px] text-left"
      >
        <span className="font-fustat font-semibold text-[18px] leading-[26px] text-[#272B35]">
          {title}
        </span>
        <div className="flex items-center justify-center w-6 h-6 border-2 border-[#272B35] rounded-full">
          <FiChevronUp
            className={`transform transition-transform duration-300 ${
              isOpen ? "" : "rotate-180"
            }`}
            size={16}
          />
        </div>
      </button>
      {/* The content will now be rendered perfectly inside */}
      {isOpen && children}
    </div>
  );
};

export default CollapsibleSection;
