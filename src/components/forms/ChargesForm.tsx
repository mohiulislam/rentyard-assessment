import React, { FC } from "react";
import FormField from "../Form/FormField";
import InputWithDropdown from "../Form/InputWithDropdown"; // Using the generic component

const ChargesForm: FC = () => {
  // Options for the dropdown
  const applicantOptions = [
    "All 18+ applicant",
    "Per Applicant",
    "Per Household",
  ];

  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Using the generic InputWithDropdown here for prototyping.
              The 'value' prop sets the default text in the editable input field.
            */}
      <InputWithDropdown
        label="Application fee(one-time)*"
        value="100"
        options={applicantOptions}
        initialOption="All 18+ applicant"
      />

      <FormField label="Admin fee(one-time)*" value="15" />
    </div>
  );
};

export default ChargesForm;
