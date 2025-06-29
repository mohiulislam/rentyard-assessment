import React, { FC } from "react";
import { FiUpload } from "react-icons/fi";

interface VideoUploadSlotProps {
  label: string;
}

const VideoUploadSlot: FC<VideoUploadSlotProps> = ({ label }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-fustat font-semibold text-base text-[#272B35]">
        {label}
        <span className="text-gray-500 font-normal">(optional)</span>
      </label>
      {/* CORRECTED: Reduced dimensions and internal spacing for a smaller look */}
      <div className="flex flex-col items-center justify-center p-3 gap-2 w-[120px] h-[100px] bg-[#F6F9FF] border-2 border-dashed border-[#316EED] rounded-xl cursor-pointer hover:bg-blue-100">
        <div className="flex items-center justify-center w-7 h-7 border border-dashed border-[#316EED] rounded-md">
          <FiUpload className="text-[#272B35]" size={16} />
        </div>
        <div className="text-center leading-tight">
          <p className="font-fustat font-bold text-[11px]">Upload video</p>
          <p className="font-fustat font-medium text-[9px] text-[#6F6C6A]">
            (MP4, MOV only)
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoUploadSlot;
