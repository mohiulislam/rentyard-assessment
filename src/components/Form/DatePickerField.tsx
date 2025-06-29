import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker"; // 1. Import the DatePicker component
import type { FC } from "react";
import { FiCalendar } from "react-icons/fi";

interface DatePickerFieldProps {
  label: string;
  placeholder: string;
}

const DatePickerField: FC<DatePickerFieldProps> = ({ label, placeholder }) => {
  // State to hold the selected date object
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // We use a custom input to maintain your existing field design.
  // The 'value' and 'onClick' props are automatically passed by the DatePicker.
  const CustomInput = forwardRef<
    HTMLButtonElement,
    { value?: string; onClick?: () => void }
  >(({ value, onClick }, ref) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="w-full flex items-center justify-between px-4 h-12 border border-[#E0E0E0] rounded-xl bg-white cursor-pointer text-left transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
    >
      <span
        className={`font-fustat font-semibold text-base ${
          value ? "text-gray-800" : "text-gray-500"
        }`}
      >
        {value || placeholder}
      </span>
      <FiCalendar size={20} className="text-gray-600" />
    </button>
  ));

  return (
    <div className="flex flex-col gap-[10px]">
      <label className="font-fustat font-semibold text-base text-[#272B35]">
        {label}
      </label>
      {/* This is the DatePicker component from the library. It handles all the calendar logic.
       */}
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        customInput={<CustomInput />}
        dateFormat="do MMMM yyyy" // Example format: "5th July 2025"
        popperPlacement="bottom-end" // Helps position the calendar nicely
      />
    </div>
  );
};

export default DatePickerField;
