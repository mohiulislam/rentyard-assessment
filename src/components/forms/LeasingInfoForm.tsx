import React, { FC } from "react";
import FormField from "../Form/FormField";
import CountryPhoneDropdown from "../Form/CountryPhoneDropdown";
import CheckboxField from "../Form/CheckboxField";

const LeasingInfoForm: FC = () => {
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
          {" "}
          {/* Wrapper for alignment */}
          <CheckboxField label="Address(same as property)" />
        </div>
      </div>
    </div>
  );
};

export default LeasingInfoForm;
