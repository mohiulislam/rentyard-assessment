import React, { FC } from "react";
import SelectDropdown from "../Form/SelectDropdown";
import FormField from "../Form/FormField";

const PetFeesForm: FC = () => {
  const petTypeOptions = ["Cats only", "Dogs only", "Cats or Dogs"];

  return (
    <div className="p-2 flex flex-col gap-6">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectDropdown
          label="Pet type*"
          options={petTypeOptions}
          initialValue="Select"
        />
        <FormField label="Max weight(LB)*" value="100" />
      </div>
      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField label="One time pet fee*" value="$100" />
        <FormField label="Pet Security Deposit*" value="$100" />
        <FormField label="Monthly pet rent*" value="$100" />
      </div>
    </div>
  );
};

export default PetFeesForm;
