import React, { FC, useState, useEffect, useRef } from 'react';

interface SelectDropdownProps {
    label: string;
    options: string[];
    initialValue: string;
}

const SelectDropdown: FC<SelectDropdownProps> = ({ label, options, initialValue }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>(initialValue);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelectOption = (option: string) => {
        setSelectedValue(option);
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col gap-2.5 relative w-full" ref={dropdownRef}>
            {/* Conditionally render the label only if it exists */}
            {label && (
                <label className="font-fustat font-semibold text-base text-[#272B35]">
                    {label}
                </label>
            )}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                // Added h-12 to match the height of other inputs
                className="flex items-center justify-between px-4 h-12 w-full border border-[#E0E0E0] rounded-lg bg-white cursor-pointer text-left"
            >
                <span className={`font-fustat text-base ${selectedValue === initialValue ? 'text-[#6F6C6A]' : 'text-[#272B35]'}`}>
                    {selectedValue}
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9L12 15L6 9" stroke="#272B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            {isOpen && (
                <ul className="absolute z-10 top-full mt-1 w-full bg-white border border-[#E0E0E0] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelectOption(option)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 font-fustat text-base text-[#272B35]"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectDropdown;