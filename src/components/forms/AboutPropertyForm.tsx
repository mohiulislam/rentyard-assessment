import TextAreaField from "../Form/TextAreaField";
import type { FC } from "react";

const AboutPropertyForm: FC = () => {
  return (
    <div className="p-2">
      <TextAreaField placeholder="Type message here" />
    </div>
  );
};

export default AboutPropertyForm;
