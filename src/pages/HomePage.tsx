import React, { FC } from "react";
import { FiInfo } from "react-icons/fi"; // Using an 'info' icon for a friendly look

const HomePage: FC = () => {
  return (
    // This container centers the content
    <div className="flex items-center justify-center h-full min-h-[calc(100vh-200px)]">
      {/* This is a 'callout' or 'alert' box. 
        It uses a soft background color, border, and an icon to draw attention.
      */}
      <div className="flex items-start gap-4 max-w-2xl p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
        <FiInfo className="flex-shrink-0 w-6 h-6 text-blue-500 mt-1" />
        <div>
          <h3 className="font-bold text-lg text-blue-800">
            A Note on This Prototype
          </h3>
          <p className="mt-1 text-md text-blue-700 leading-relaxed">
            Since I didn't have a clear idea about the implementation, the UI
            was created as best as possible based on assumptions. If I had the
            idea, it would have been fully functional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
