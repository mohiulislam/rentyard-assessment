import React, { FC } from "react";

interface FormFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
}

const FormField: FC<FormFieldProps> = ({ label, placeholder, value }) => (
  <div className="flex flex-col gap-[10px]">
    <label className="font-fustat font-semibold text-base text-[#272B35]">
      {label}
    </label>
    {/* UPDATED: Added focus-within classes to highlight the border on focus */}
    <div className="flex items-center h-12 px-4 bg-white border border-[#E0E0E0] rounded-xl transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/30">
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={value}
        className="w-full h-full bg-transparent outline-none border-none font-fustat text-base text-gray-700 placeholder:text-[#6F6C6A]"
      />
    </div>
  </div>
);

export default FormField;
