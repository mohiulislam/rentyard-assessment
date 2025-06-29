import React, { FC } from "react";
import FormField from "../Form/FormField";
import SelectDropdown from "../Form/SelectDropdown";

// Corrected: Added 'stateOptions' to the import list.
import { countryOptions, stateOptions } from "../../constants/dropdownOptions";

const PropertyAddressForm: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* First Row of Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          label="Property name as identifier*"
          value="Dallas apartments complex"
        />
        <FormField label="Total apartment unit*" value="50" />
        <FormField label="Property website(optional)" value="https//:" />
      </div>

      {/* Second Row of Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SelectDropdown
          label="Country/Region*"
          options={countryOptions}
          initialValue="Choose country"
        />
        <FormField label="Street address*" value="111 Austin Ave" />
        <FormField label="Apt, suite, unit (if applicable)" value="123" />
      </div>

      {/* Third Row of Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField label="City/Town*" value="Dallas" />
        <SelectDropdown
          label="State/Territory*"
          options={stateOptions} // This will now work correctly
          initialValue="Choose state"
        />
        <FormField label="Zip code*" value="75061" />
      </div>
    </div>
  );
};

export default PropertyAddressForm;
