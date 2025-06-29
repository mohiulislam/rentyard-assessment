import React, { FC } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  placeholder: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder, onSearchChange }) => {
  return (
    <div className="flex items-center w-full px-4 py-2 gap-2.5 border border-[#E0E0E0] rounded-full">
      <FiSearch className="text-[#6F6C6A]" size={22} />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full bg-transparent outline-none border-none focus:ring-0 font-fustat text-base text-[#272B35] placeholder:text-[#6F6C6A]"
      />
    </div>
  );
};

export default SearchBar;
