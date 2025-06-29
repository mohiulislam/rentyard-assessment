import { useState, useEffect, useRef } from "react";
import { phoneCountries } from "../../constants/dropdownOptions";
import type { FC } from "react";
// Define the Country type
type Country = {
  name: string;
  code: string;
  flag: string;
};

const CountryPhoneDropdown: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    phoneCountries[0]
  );
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-2.5">
      <label className="font-fustat font-semibold text-base text-[#272B35]">
        Phone number*
      </label>
      <div className="flex h-12">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center gap-1.5 px-3 h-full bg-white border border-r-0 border-[#E0E0E0] rounded-l-lg"
          >
            <img
              src={selectedCountry.flag}
              width="24"
              alt={`${selectedCountry.name} Flag`}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 9L12 15L6 9"
                stroke="#272B35"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {isOpen && (
            <ul className="absolute z-10 top-full mt-1 w-max bg-white border border-[#E0E0E0] rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {phoneCountries.map((country) => (
                <li
                  key={country.name}
                  onClick={() => handleSelectCountry(country)}
                  className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src={country.flag}
                    width="24"
                    alt={`${country.name} Flag`}
                  />
                  <span className="font-fustat text-sm text-[#272B35]">
                    {country.name} ({country.code})
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center px-4 flex-grow border border-[#E0E0E0] rounded-r-lg bg-white gap-2">
          <span className="font-fustat text-base text-gray-500">
            {selectedCountry.code}
          </span>
          <input
            type="tel"
            placeholder=" "
            className="w-full bg-transparent outline-none font-fustat text-base text-[#6F6C6A]"
          />
        </div>
      </div>
    </div>
  );
};

export default CountryPhoneDropdown;
