import React from "react";

interface SelectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  selected?: boolean;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  icon,
  title,
  description,
  selected = false,
}) => {
  return (
    <div
      className={`
        group flex flex-row items-center p-5 gap-4 bg-white border border-2 rounded-xl
        transition-all duration-300 w-full min-h-24 cursor-pointer
        ${
          selected
            ? "border-blue-500 shadow-md"
            : "border-[#E0E0E0] hover:border-blue-400 hover:shadow-sm"
        }
      `}
    >
      <div
        className={`
          flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg
          transition-colors duration-300
          ${selected ? "bg-blue-50" : "bg-[#F9FBFF] group-hover:bg-blue-50"}
        `}
      >
        {icon}
      </div>

      <div className="flex flex-col justify-center gap-[6px]">
        <h3 className="font-fustat font-semibold text-base leading-[23px] text-[#272B35]">
          {title}
        </h3>
        <p className="font-fustat font-medium text-sm leading-5 text-[#777980]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SelectionCard;