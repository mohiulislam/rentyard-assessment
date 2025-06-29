import React, { FC } from "react";

interface CheckboxFieldProps {
  label: string;
  defaultChecked?: boolean;
}

const CheckboxField: FC<CheckboxFieldProps> = ({
  label,
  defaultChecked = false,
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <span className="font-fustat font-semibold text-base text-[#272B35]">
        {label}
      </span>
    </label>
  );
};

export default CheckboxField;
