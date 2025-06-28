import React, { FC } from "react";

interface FormFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
}

const FormField: FC<FormFieldProps> = ({ label, placeholder, value }) => (
  <div className="flex flex-col gap-2.5">
    <label className="font-fustat font-semibold text-base text-[#272B35]">
      {label}
    </label>
    <div className="flex items-center px-4 h-12 border border-[#E0E0E0] rounded-lg bg-white">
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={value}
        className="w-full bg-transparent outline-none font-fustat text-base text-[#6F6C6A]"
      />
    </div>
  </div>
);

export default FormField;
