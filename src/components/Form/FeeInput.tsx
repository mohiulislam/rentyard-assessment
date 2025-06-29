import { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import type { FC } from "react";
interface FeeInputProps {
  label: string;
  defaultValue: string;
  options: string[];
  initialOption: string;
}

const FeeInput: FC<FeeInputProps> = ({
  label,
  defaultValue,
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
      <div className="flex items-center h-12 border border-[#E0E0E0] rounded-xl overflow-hidden">
        {/* Text Input Part */}
        <input
          type="text"
          defaultValue={defaultValue}
          readOnly // <-- CORRECTED: Added readOnly to make the field not changeable
          className="h-full w-2/5 px-4 bg-transparent outline-none focus:ring-0 border-none font-fustat font-semibold text-[#6F6C6A] cursor-default"
        />
        {/* Vertical Divider */}
        <div className="h-full border-l border-[#E0E0E0]"></div>
        {/* Dropdown Part */}
        <div className="relative h-full w-3/5" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full h-full flex items-center justify-between px-4"
          >
            <span className="font-fustat font-semibold text-base text-[#6F6C6A]">
              {selectedOption}
            </span>
            <FiChevronDown size={20} />
          </button>
          {isOpen && (
            <ul className="absolute z-10 top-full mt-1 w-full bg-white border border-[#E0E0E0] rounded-lg shadow-lg max-h-60 overflow-y-auto">
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

export default FeeInput;
