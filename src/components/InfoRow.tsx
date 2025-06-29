import React, { FC } from "react";
import { IoIosAdd } from "react-icons/io";

interface InfoRowProps {
  label: string;
  status: "Required" | "Optional" | "Recommended";
  onAdd: () => void; // <-- ADD THIS PROP
}

const InfoRow: FC<InfoRowProps> = ({ label, status, onAdd }) => {
  // ... (rest of the component logic is the same)
  const getStatusText = () => {
    if (label === "Pet fees") return `(${status}, add fees if you allow pet)`;
    if (status === "Recommended") return `(${status} but recommended)`;
    return `(${status})`;
  };

  const statusColor = {
    Required: "text-red-500",
    Optional: "text-gray-500",
    Recommended: "text-gray-500",
  };

  return (
    <div className="flex items-center justify-between p-5 bg-white border border-[#E0E0E0] rounded-[20px] h-[66px]">
      <p className="font-fustat font-semibold text-[18px] leading-[26px] text-[#272B35]">
        {label}
        <span className={`font-normal text-sm ml-1 ${statusColor[status]}`}>
          {getStatusText()}
        </span>
      </p>
      {/* Attach the onAdd function to the button's onClick event */}
      <button
        onClick={onAdd}
        className="flex items-center gap-[6px] text-[#316EED] font-semibold"
      >
        <IoIosAdd size={22} />
        <span className="text-[16px] underline">Add</span>
      </button>
    </div>
  );
};

export default InfoRow;
