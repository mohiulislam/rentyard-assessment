import React, { FC } from "react";
import FileUploadField from "../Form/FileUploadField";
import CheckboxField from "../Form/CheckboxField";

const ApplicationAgreementForm: FC = () => {
  return (
    <div className="p-2 flex flex-col gap-6">
      <FileUploadField label="Upload agreement" />
      <CheckboxField label="Accept immigrant & international student application" />
    </div>
  );
};

export default ApplicationAgreementForm;
