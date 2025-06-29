import React, { FC, useState } from "react";
import FormField from "../Form/FormField";
import CountryPhoneDropdown from "../Form/CountryPhoneDropdown";
import CheckboxField from "../Form/CheckboxField";
import SelectDropdown from "../Form/SelectDropdown";
import { stateOptions } from "../../constants/dropdownOptions";

const LeasingInfoForm: FC = () => {
  // 1. Add state to track the checkbox
  const [isSameAddress, setIsSameAddress] = useState(true);

  return (
    <div className="flex flex-col gap-4 p-2">
      {/* First Row: Name and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Leasing manager name*" value="Alex johan" />
        <CountryPhoneDropdown />
      </div>

      {/* Second Row: Email and Checkbox */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
        <FormField
          label="Leasing manager email*"
          value="leasing@rentyeard.com"
        />
        <div className="pb-3">
          {/* 2. Control the CheckboxField with state */}
          <CheckboxField
            label="Address(same as property)"
            checked={isSameAddress}
            onChange={setIsSameAddress}
          />
        </div>
      </div>

      {/* 3. Conditionally render the address fields */}
      {!isSameAddress && (
        <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField label="Street address*" value="111 Austin Ave" />
            <FormField label="Apt, suit, unit*" value="123" />
            <FormField label="City/Town*" value="Dallas" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectDropdown
              label="State/Territory*"
              options={stateOptions}
              initialValue="Choose state"
            />
            <FormField label="Zip code*" value="75061" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LeasingInfoForm;
