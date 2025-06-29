import { useState } from "react";
import type { Amenity } from "../constants/amenities";
import type { FC } from "react";

interface AmenityPillProps {
  amenity: Amenity;
  initialSelected?: boolean;
}

const AmenityPill: FC<AmenityPillProps> = ({
  amenity,
  initialSelected = false,
}) => {
  const [isSelected, setIsSelected] = useState(initialSelected);

  const baseClasses =
    "flex items-center gap-2 px-4 py-2.5 border-2 rounded-xl cursor-pointer transition-colors duration-200";
  const selectedClasses = "bg-[#F5F8FF] border-[#316EED]";
  const unselectedClasses = "bg-white border-[#E0E0E0] hover:border-gray-400";

  return (
    <button
      onClick={() => setIsSelected(!isSelected)}
      className={`${baseClasses} ${
        isSelected ? selectedClasses : unselectedClasses
      }`}
    >
      <div
        className={`p-1.5 rounded-lg ${
          isSelected ? "bg-transparent" : "bg-[#F4F4F4]"
        }`}
      >
        {amenity.icon}
      </div>
      <span className="font-fustat font-medium text-base text-[#272B35]">
        {amenity.label}
      </span>
    </button>
  );
};

export default AmenityPill;
