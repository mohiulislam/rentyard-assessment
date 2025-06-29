import React, { FC, useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

interface InputWithDropdownProps {
  label: string;
  value: string;
  options: string[];
  initialOption: string;
  isEditable: boolean;
}

const InputWithDropdown: FC<InputWithDropdownProps> = ({
  label,
  value,
  options,
  initialOption,
  isEditable,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialOption);
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
    <div className="flex flex-col gap-[10px]">
      <label className="font-fustat font-semibold text-base text-[#272B35]">
        {label}
      </label>
      <div className="flex items-center h-12 border border-[#E0E0E0] rounded-xl">
        {/* Left Side: Input or Static Text */}
        <div className="flex-grow h-full px-4 flex items-center">
          {isEditable ? (
            <input
              type="text"
              defaultValue={value}
              className="w-full h-full bg-transparent outline-none focus:ring-0 border-none font-fustat font-semibold text-[#6F6C6A]"
            />
          ) : (
            <span className="font-fustat font-semibold text-[#6F6C6A]">
              {value}
            </span>
          )}
        </div>

        {/* CORRECTED: The vertical divider div has been completely removed. */}

        {/* Right Side: Dropdown Button */}
        <div className="relative flex-shrink-0" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between gap-2 px-4 h-12"
          >
            <span className="font-fustat font-semibold text-base text-[#6F6C6A] whitespace-nowrap">
              {selectedOption}
            </span>
            <FiChevronDown
              size={20}
              className={`transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isOpen && (
            <ul className="absolute z-10 top-full right-0 mt-1 min-w-full bg-white border border-[#E0E0E0] rounded-lg shadow-lg">
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setSelectedOption(option);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 font-fustat text-base text-[#272B35]"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputWithDropdown;
