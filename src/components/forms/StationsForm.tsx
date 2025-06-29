import type { FC } from "react";
import SelectDropdown from "../Form/SelectDropdown";
import FormField from "../Form/FormField";
import InputWithDropdown from "../Form/InputWithDropdown"; // <-- Import the new component

const StationsForm: FC = () => {
  const stationTypes = ["Bus Station", "Train Station", "Subway Station"];
  const distanceUnits = ["Mile", "KM"]; // <-- Define options here

  return (
    <div className="p-2 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
        <SelectDropdown
          label="Nearest station type*"
          options={stationTypes}
          initialValue="Select"
        />
        {/* Use the new component with its props */}
        <InputWithDropdown
          label="Distance from property*"
          value="1.5"
          options={distanceUnits}
          initialOption="Mile"
        />
      </div>
      <FormField label="Nearest station name*" placeholder="Enter name" />
    </div>
  );
};

export default StationsForm;
