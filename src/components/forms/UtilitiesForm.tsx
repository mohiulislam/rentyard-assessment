import React, { FC } from "react";
import SelectDropdown from "../Form/SelectDropdown";
import FormField from "../Form/FormField";

const UtilitiesForm: FC = () => {
  const utilityTypes = ["Electricity", "Gas", "Water", "Internet", "Trash"];
  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
      <SelectDropdown
        label="Utility type*"
        options={utilityTypes}
        initialValue="Select"
      />
      <FormField label="Provider company name*" placeholder="Enter name" />
    </div>
  );
};

export default UtilitiesForm;
