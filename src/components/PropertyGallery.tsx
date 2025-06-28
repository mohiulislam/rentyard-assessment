import React, { FC } from "react";
import { FiUpload } from "react-icons/fi";

// A small, reusable component for each upload slot, now precisely styled
const PhotoUploadSlot: FC<{ variant: "large" | "small" }> = ({ variant }) => {
  const isLarge = variant === "large";

  if (isLarge) {
    return (
      <div className="flex flex-col items-center justify-center p-4 gap-[7px] w-[217px] h-[165px] bg-[#F6F9FF] border border-dashed border-[#316EED] rounded-[12px] cursor-pointer">
        <div className="flex items-center justify-center w-[36px] h-[36px] border border-dashed border-[#316EED] rounded-[6px] mb-1">
          <FiUpload className="text-[#272B35]" size={20} />
        </div>
        <div className="text-center">
          <p className="font-fustat font-semibold text-[16px] leading-[24px] text-[#272B35]">
            Upload cover photo
          </p>
          <p className="font-fustat font-semibold text-[10px] leading-[15px] text-[#6F6C6A]">
            (Jpg, png only)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-[101px] h-[76px] bg-[#F6F9FF] border border-dashed border-[#316EED] rounded-[12px] cursor-pointer">
      <div className="flex items-center justify-center w-[28px] h-[28px] border border-dashed border-[#316EED] rounded-[6px]">
        <FiUpload className="text-[#272B35]" size={16} />
      </div>
    </div>
  );
};

const PropertyGallery: FC = () => {
  return (
    <div className="p-5 bg-white border border-[#E0E0E0] rounded-[14px]">
      {/* Header with bottom border */}
      <div className="pb-5 border-b border-[#E0E0E0]">
        <h3 className="font-fustat font-semibold text-[18px] leading-[26px] text-[#272B35]">
          Property gallery
          <span className="text-gray-500 font-normal">
            (Its not unit photo)*
          </span>
        </h3>
      </div>

      <div className="pt-5 flex flex-col md:flex-row gap-6">
        {/* Featured Photos Section */}
        <div className="flex flex-col gap-[10px]">
          <h4 className="font-fustat font-semibold text-[16px] leading-[23px] text-[#272B35]">
            Featured photos*
          </h4>
          <div className="flex gap-[10px]">
            <PhotoUploadSlot variant="large" />
            <div className="flex flex-col gap-[13px]">
              <PhotoUploadSlot variant="small" />
              <PhotoUploadSlot variant="small" />
            </div>
          </div>
        </div>

        {/* More Photos Section */}
        <div className="flex flex-col gap-[10px]">
          <h4 className="font-fustat font-semibold text-[16px] leading-[23px]">
            More photos
            <span className="text-gray-500 font-normal">(optional)</span>
          </h4>
          <div className="grid grid-cols-4 gap-[10px]">
            <PhotoUploadSlot variant="small" />
            <PhotoUploadSlot variant="small" />
            <PhotoUploadSlot variant="small" />
            <PhotoUploadSlot variant="small" />
            <PhotoUploadSlot variant="small" />
            <PhotoUploadSlot variant="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
