import React, { FC, useState, useRef, ChangeEvent } from "react";
import { FiUpload, FiX } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";

interface FileUploadFieldProps {
  label: string;
}

const FileUploadField: FC<FileUploadFieldProps> = ({ label }) => {
  // 1. Add state to hold the selected file
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 2. Create a ref to access the hidden file input element
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 3. This handler is called when a file is selected from the dialog
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // 4. This function programmatically clicks the hidden file input
  const handleBoxClick = () => {
    // If a file is already selected, clicking the box does nothing until it's removed
    if (!selectedFile) {
      fileInputRef.current?.click();
    }
  };

  // 5. This function clears the selected file state
  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the box's onClick from firing
    setSelectedFile(null);
    // Also clear the value of the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <label className="font-fustat font-semibold text-base text-[#272B35]">
        {label}
      </label>

      {/* The actual file input is hidden from view */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf" // We only want PDF files
      />

      {/* This is the styled, visible box that the user interacts with */}
      <div
        onClick={handleBoxClick}
        className={`flex items-center h-12 px-4 border rounded-lg transition-all duration-200 ${
          selectedFile
            ? "border-blue-500 bg-blue-50"
            : "border-dashed border-gray-300 bg-gray-50/50 cursor-pointer hover:bg-gray-100"
        }`}
      >
        {selectedFile ? (
          // --- PREVIEW STATE (when a file is selected) ---
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3 overflow-hidden">
              <FaFilePdf className="text-red-500 flex-shrink-0" size={24} />
              <span
                className="text-sm text-gray-800 font-medium truncate"
                title={selectedFile.name}
              >
                {selectedFile.name}
              </span>
            </div>
            <button
              onClick={handleRemoveFile}
              className="p-1 rounded-full hover:bg-gray-200 flex-shrink-0"
              title="Remove file"
            >
              <FiX size={18} className="text-gray-600" />
            </button>
          </div>
        ) : (
          // --- INITIAL UPLOAD STATE ---
          <div className="flex justify-center items-center gap-2.5 w-full">
            <FiUpload className="text-gray-500" size={20} />
            <span className="font-fustat font-semibold text-sm text-gray-500">
              (Pdf only)
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadField;
