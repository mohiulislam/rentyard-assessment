import { useState } from "react";
import VideoUploadSlot from "./VideoUploadSlot";
import type { FC } from "react";
type VideoSlots = {
  propertyVideo: File | null;
  virtualTour: File | null;
  aerialVideo: File | null;
};

const VideoUpload: FC = () => {
  const [videos, setVideos] = useState<VideoSlots>({
    propertyVideo: null,
    virtualTour: null,
    aerialVideo: null,
  });

  const handleFileSelect = (slotId: keyof VideoSlots, file: File) => {
    setVideos((prev) => ({ ...prev, [slotId]: file }));
  };

  return (
    <div className="p-5 flex flex-wrap gap-6 border-t border-gray-200">
      <VideoUploadSlot
        label="Property Video"
        fileName={videos.propertyVideo?.name}
        onFileSelect={(file) => handleFileSelect("propertyVideo", file)}
      />
      <VideoUploadSlot
        label="Property virtual tour"
        fileName={videos.virtualTour?.name}
        onFileSelect={(file) => handleFileSelect("virtualTour", file)}
      />
      <VideoUploadSlot
        label="Property arial video"
        fileName={videos.aerialVideo?.name}
        onFileSelect={(file) => handleFileSelect("aerialVideo", file)}
      />
    </div>
  );
};

export default VideoUpload;
