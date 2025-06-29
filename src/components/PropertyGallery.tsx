import { useState } from "react";
import PhotoUploadSlot from "./PhotoUploadSlot";
import type { FC } from "react";
// Define a type for our photo state
type PhotoSlots = {
  featuredLarge: string | null;
  featuredSmall1: string | null;
  featuredSmall2: string | null;
  more1: string | null;
  more2: string | null;
  more3: string | null;
  more4: string | null;
  more5: string | null;
  more6: string | null;
};

const PropertyGallery: FC = () => {
  // State to hold the preview URLs for each slot
  const [photos, setPhotos] = useState<PhotoSlots>({
    featuredLarge: null,
    featuredSmall1: null,
    featuredSmall2: null,
    more1: null,
    more2: null,
    more3: null,
    more4: null,
    more5: null,
    more6: null,
  });

  // Handler to update the state when a file is selected
  const handleFileSelect = (slotId: keyof PhotoSlots, file: File) => {
    const previewUrl = URL.createObjectURL(file);
    setPhotos((prev) => ({ ...prev, [slotId]: previewUrl }));
  };

  return (
    <div className="p-5 bg-white border border-[#E0E0E0] rounded-[14px]">
      <div className="pb-5 border-b border-gray-200">
        <h3 className="font-fustat font-semibold text-lg text-[#272B35]">
          Property gallery
          <span className="text-gray-500 font-normal ml-1">
            (Its not unit photo)*
          </span>
        </h3>
      </div>
      <div className="pt-5 flex flex-col lg:flex-row gap-6">
        <div>
          <h4 className="font-fustat font-semibold text-base mb-3">
            Featured photos*
          </h4>
          <div className="grid grid-cols-3 gap-3 h-48 w-[330px]">
            <div className="col-span-2 row-span-2">
              <PhotoUploadSlot
                variant="large"
                previewUrl={photos.featuredLarge}
                onFileSelect={(file) => handleFileSelect("featuredLarge", file)}
              />
            </div>
            <div className="col-span-1">
              <PhotoUploadSlot
                variant="small"
                previewUrl={photos.featuredSmall1}
                onFileSelect={(file) =>
                  handleFileSelect("featuredSmall1", file)
                }
              />
            </div>
            <div className="col-span-1">
              <PhotoUploadSlot
                variant="small"
                previewUrl={photos.featuredSmall2}
                onFileSelect={(file) =>
                  handleFileSelect("featuredSmall2", file)
                }
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-fustat font-semibold text-base mb-3">
            More photos{" "}
            <span className="text-gray-500 font-normal">(optional)</span>
          </h4>
          <div className="grid grid-cols-3 gap-3 h-48 w-[330px]">
            <div className="col-span-1">
              <PhotoUploadSlot
                variant="small"
                previewUrl={photos.more1}
                onFileSelect={(file) => handleFileSelect("more1", file)}
              />
            </div>
            <div className="col-span-1">
              <PhotoUploadSlot
                variant="small"
                previewUrl={photos.more2}
                onFileSelect={(file) => handleFileSelect("more2", file)}
              />
            </div>
            <div className="col-span-1">
              <PhotoUploadSlot
                variant="small"
                previewUrl={photos.more3}
                onFileSelect={(file) => handleFileSelect("more3", file)}
              />
            </div>
            <div className="col-span-1">
              <PhotoUploadSlot
                variant="small"
                previewUrl={photos.more4}
                onFileSelect={(file) => handleFileSelect("more4", file)}
              />
            </div>
            <div className="col-span-1">
              <PhotoUploadSlot
                variant="small"
                previewUrl={photos.more5}
                onFileSelect={(file) => handleFileSelect("more5", file)}
              />
            </div>
            <div className="col-span-1">
              <PhotoUploadSlot
                variant="small"
                previewUrl={photos.more6}
                onFileSelect={(file) => handleFileSelect("more6", file)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
