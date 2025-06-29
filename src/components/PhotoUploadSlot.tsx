import React, { FC, useRef } from "react";
import { FiUpload } from "react-icons/fi";

interface PhotoUploadSlotProps {
  variant: "large" | "small";
  previewUrl?: string | null;
  onFileSelect: (file: File) => void;
}

const PhotoUploadSlot: FC<PhotoUploadSlotProps> = ({
  variant,
  previewUrl,
  onFileSelect,
}) => {
  const isLarge = variant === "large";
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onFileSelect(event.target.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  // If there is a preview URL, show the image instead of the upload UI
  if (previewUrl) {
    return (
      <div className="w-full h-full">
        <img
          src={previewUrl}
          alt="Preview"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    );
  }

  // Default Upload UI
  const containerClasses =
    "group flex flex-col items-center justify-center w-full h-full bg-gray-50/50 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-gray-100";
  const iconWrapperClasses =
    "flex items-center justify-center border border-dashed border-gray-300 group-hover:border-blue-400";

  return (
    <div className={containerClasses} onClick={handleClick}>
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      {isLarge ? (
        <div className="flex flex-col items-center justify-center p-4 gap-2">
          <div
            className={`${iconWrapperClasses} w-[36px] h-[36px] rounded-[6px] mb-1`}
          >
            <FiUpload className="text-gray-500" size={20} />
          </div>
          <div className="text-center">
            <p className="font-fustat font-semibold text-sm text-center text-gray-800">
              Upload cover photo
            </p>
            <p className="font-fustat text-xs text-gray-500">
              (.Jpg, .png only)
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`${iconWrapperClasses} w-[28px] h-[28px] rounded-[6px]`}
        >
          <FiUpload className="text-gray-500" size={16} />
        </div>
      )}
    </div>
  );
};

export default PhotoUploadSlot;
