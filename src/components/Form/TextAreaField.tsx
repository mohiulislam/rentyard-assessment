import React, { FC } from "react";

interface TextAreaFieldProps {
  placeholder?: string;
  rows?: number;
}

const TextAreaField: FC<TextAreaFieldProps> = ({ placeholder, rows = 6 }) => {
  return (
    <div className="w-full">
      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full p-4 bg-white border border-[#E0E0E0] rounded-xl outline-none focus:ring-2 focus:ring-blue-400 font-fustat text-base text-[#272B35] placeholder:text-[#6F6C6A] resize-none"
      ></textarea>
    </div>
  );
};

export default TextAreaField;
