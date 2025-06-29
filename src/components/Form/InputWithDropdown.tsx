import React, { FC, useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

interface InputWithDropdownProps {
  label: string;
  value: string;
  options: string[];
  initialOption: string;
}

const InputWithDropdown: FC<InputWithDropdownProps> = ({
  label,
  value,
  options,
  initialOption,
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
      {/* The focus styles are applied to this main container div */}
      <div className="flex items-center h-12 border border-[#E0E0E0] rounded-xl px-4 transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/30">
        {/* Left Side: Always renders an editable input */}
        <div className="flex-grow h-full flex items-center">
          <input
            type="text"
            defaultValue={value}
            className="w-full h-full bg-transparent outline-none focus:ring-0 border-none font-fustat font-semibold text-[#6F6C6A]"
          />
        </div>

        {/* Right Side: The dropdown selector */}
        <div className="relative flex-shrink-0" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between gap-2 h-12 pl-2"
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
