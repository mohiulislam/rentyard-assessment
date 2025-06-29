import React, { FC, useState } from "react";

interface TextAreaFieldProps {
  placeholder?: string;
  rows?: number;
  maxLength?: number;
}

const TextAreaField: FC<TextAreaFieldProps> = ({
  placeholder,
  rows = 6,
  maxLength,
}) => {
  const [charCount, setCharCount] = useState(0);

  return (
    <div className="w-full relative">
      <textarea
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => setCharCount(e.target.value.length)}
        className="w-full p-4 pr-16 bg-white border border-[#E0E0E0] rounded-xl outline-none focus:ring-2 focus:ring-blue-400 font-fustat text-base text-[#272B35] placeholder:text-[#6F6C6A] resize-none"
      ></textarea>
      {maxLength && (
        <span className="absolute bottom-4 right-4 text-sm text-gray-500">
          {charCount}/{maxLength}
        </span>
      )}
    </div>
  );
};

export default TextAreaField;
