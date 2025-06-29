import React, { FC, useState, useEffect, useRef } from "react";
import TextAreaField from "../Form/TextAreaField";
import { FiChevronDown } from "react-icons/fi";

// This is a new, self-contained component specifically for the parking time dropdown row.
// It is styled correctly and manages its own state.
const GuestParkingTime: FC = () => {
  const timeOptions = ["2H", "4H", "6H", "12H", "24H"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("2H");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // This container has the correct fixed width from your design
    <div className="flex items-center justify-between p-4 h-12 border border-[#E0E0E0] rounded-xl w-[343px]">
      <span className="font-fustat font-semibold text-base text-[#272B35]">
        Guest vehicle parking time
      </span>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between gap-2.5 w-[68px] h-8 px-2.5 border border-[#E0E0E0] rounded-md"
        >
          <span className="font-fustat font-medium text-sm">
            {selectedTime}
          </span>
          <FiChevronDown size={16} />
        </button>
        {isOpen && (
          <ul className="absolute z-10 top-full right-0 mt-1 w-full bg-white border border-[#E0E0E0] rounded-md shadow-lg">
            {timeOptions.map((time) => (
              <li
                key={time}
                onClick={() => {
                  setSelectedTime(time);
                  setIsOpen(false);
                }}
                className="px-2.5 py-1.5 cursor-pointer hover:bg-gray-100 font-fustat text-sm"
              >
                {time}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ParkingForm: FC = () => {
  return (
    <div className="p-2 flex flex-col gap-4">
      <GuestParkingTime />
      <TextAreaField
        placeholder="Write parking overview"
        maxLength={200}
        rows={5}
      />
    </div>
  );
};

export default ParkingForm;
