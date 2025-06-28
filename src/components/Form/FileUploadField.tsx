import React, { FC } from 'react';
import { FiUpload } from "react-icons/fi"; 

interface FileUploadFieldProps {
    label: string;
}
  
const FileUploadField: FC<FileUploadFieldProps> = ({ label }) => (
    <div className="flex flex-col gap-2.5">
        <label className="font-fustat font-semibold text-base text-[#272B35]">
            {label}
        </label>
        <div className="flex justify-center items-center gap-2.5 h-12 border border-dashed border-[#E0E0E0] rounded-lg bg-[#F6F6F6]">
            <FiUpload className="text-[#272B35]" size={20} />
            <span className="font-fustat font-semibold text-sm text-[#6F6C6A]">
                (Pdf only)
            </span>
        </div>
    </div>
);

export default FileUploadField;