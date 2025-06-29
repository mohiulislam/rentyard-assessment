import type { ReactNode } from "react";
import type { FC } from "react";
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
      {/* UPDATED: Added focus-within classes for highlight effect */}
      <div className="relative flex items-center h-12 bg-white border border-[#E0E0E0] rounded-xl transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/30">
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={value}
          className="w-full h-full px-4 pr-10 outline-none border-none bg-transparent"
        />
        <div className="absolute right-3 text-gray-400">{icon}</div>
      </div>
    </div>
  );
};

export default IconFormField;
