import React, { FC } from "react";
import FormField from "../Form/FormField";
import InputWithDropdown from "../Form/InputWithDropdown"; // <-- Import the new component

const LandmarkForm: FC = () => {
  const distanceUnits = ["Mile", "KM"]; // <-- Define options here

  return (
    <div className="p-2 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
        <FormField label="Landmark type*" value="Museum" />
        {/* Use the new component with its props */}
        <InputWithDropdown
          label="Distance from property*"
          inputValue="1.5"
          options={distanceUnits}
          initialOption="Mile"
        />
      </div>
      <FormField label="Landmark name*" placeholder="Enter name" />
    </div>
  );
};

export default LandmarkForm;
