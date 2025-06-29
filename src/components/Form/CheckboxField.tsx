import type { FC } from "react";

interface CheckboxFieldProps {
  label: string;
  checked: boolean; // Use 'checked' for controlled component
  onChange: (isChecked: boolean) => void; // Function to report changes
}

const CheckboxField: FC<CheckboxFieldProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)} // Report changes to the parent
        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <span className="font-fustat font-semibold text-base text-[#272B35]">
        {label}
      </span>
    </label>
  );
};

export default CheckboxField;
