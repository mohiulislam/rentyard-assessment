import React, { FC, ReactNode } from "react";

interface IconFormFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  icon: ReactNode;
}

const IconFormField: FC<IconFormFieldProps> = ({
  label,
  placeholder,
  value,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label className="font-fustat font-semibold text-base text-[#272B35]">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={value}
          className="w-full h-12 px-4 pr-10 bg-white border border-[#E0E0E0] rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="absolute right-3 text-gray-400">{icon}</div>
      </div>
    </div>
  );
};

export default IconFormField;
