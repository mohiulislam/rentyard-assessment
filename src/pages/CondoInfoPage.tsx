import React, { FC } from "react";

// Import Components
import InfoRow from "../components/InfoRow";
import PropertyGallery from "../components/PropertyGallery";
import CollapsibleSection from "../components/CollapsibleSection";

const CondoInfoPage: FC = () => {
  return (
    // Corrected: Removed horizontal padding and set a clean white background
    // to match the layout of your other pages.
    <div className="py-8 bg-white">
      <div className="flex flex-col gap-8">
        {/* Page Title */}
        <h1 className="font-fustat font-bold text-2xl leading-[34px] text-[#272B35]">
          Condominiums information
        </h1>

        {/* Information Rows Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <InfoRow label="Property address" status="Required" />
            <InfoRow label="Leasing info" status="Required" />
            <InfoRow label="Charges" status="Required" />
            <InfoRow
              label="Rent frequency & payment reminder"
              status="Required"
            />
            <InfoRow label="Application agreement" status="Optional" />
            <InfoRow label="About the property" status="Optional" />
            <InfoRow
              label="Community's amenity/features"
              status="Recommended"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <InfoRow label="Pet fees" status="Optional" />
            <InfoRow label="Parking" status="Optional" />
            <InfoRow
              label="Nearest educational institution"
              status="Recommended"
            />
            <InfoRow label="Nearest stations" status="Recommended" />
            <InfoRow label="Nearest landmark" status="Recommended" />
            <InfoRow label="Utilities provider" status="Recommended" />
          </div>
        </section>

        {/* Property Gallery Section */}
        <section>
          <PropertyGallery />
        </section>

        {/* Videos Section */}
        <section>
          <CollapsibleSection title="Videos (optional)" />
        </section>
      </div>
    </div>
  );
};

export default CondoInfoPage;
