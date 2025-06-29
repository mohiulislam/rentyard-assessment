import React, { FC } from 'react';
import { FiCalendar } from 'react-icons/fi';

interface DatePickerFieldProps {
    label: string;
    value: string;
}

const DatePickerField: FC<DatePickerFieldProps> = ({ label, value }) => {
    return (
        <div className="flex flex-col gap-[10px]">
            <label className="font-fustat font-semibold text-base text-[#272B35]">
                {label}
            </label>
            {/* This button would open a calendar in a real app */}
            <button
                type="button"
                className="flex items-center justify-between px-4 h-12 border border-[#E0E0E0] rounded-xl bg-white cursor-pointer text-left"
            >
                <span className="font-fustat font-semibold text-base text-[#6F6C6A]">
                    {value}
                </span>
                <FiCalendar size={20} className="text-gray-600" />
            </button>
        </div>
    );
};

export default DatePickerField;