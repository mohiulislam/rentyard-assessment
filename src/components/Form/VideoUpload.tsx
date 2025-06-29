import React, { FC } from "react";
import VideoUploadSlot from "./VideoUploadSlot";

const VideoUpload: FC = () => {
  return (
    // CORRECTED: Switched from 'grid' to 'flex flex-wrap' to ensure left alignment.
    <div className="p-5 flex flex-wrap gap-6 border-t border-gray-200">
      <VideoUploadSlot label="Property Video" />
      <VideoUploadSlot label="Property virtual tour" />
      <VideoUploadSlot label="Property arial video" />
    </div>
  );
};

export default VideoUpload;
