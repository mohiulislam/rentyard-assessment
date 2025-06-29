import FileUploadField from "../Form/FileUploadField";
import CheckboxField from "../Form/CheckboxField";
import type { FC } from "react";
const ApplicationAgreementForm: FC = () => {
  return (
    <div className="p-2 flex flex-col gap-6">
      <FileUploadField label="Upload agreement" />
      <CheckboxField
        label="Accept immigrant & international student application"
        checked={false}
        onChange={() => {}}
      />
    </div>
  );
};

export default ApplicationAgreementForm;
