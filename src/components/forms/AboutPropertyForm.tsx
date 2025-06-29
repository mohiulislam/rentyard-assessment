import React, { FC } from "react";
import TextAreaField from "../Form/TextAreaField";


const AboutPropertyForm: FC = () => {
  return (
    <div className="p-2">
      <TextAreaField placeholder="Type message here" />
    </div>
  );
};

export default AboutPropertyForm;
