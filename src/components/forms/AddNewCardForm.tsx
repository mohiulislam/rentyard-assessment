import React, { FC } from "react";
import FormField from "../Form/FormField";
import IconFormField from "../Form/IconFormField";
import { FaCreditCard } from "react-icons/fa"; // Example icons
import { BsThreeDots } from "react-icons/bs";

const AddNewCardForm: FC = () => {
  return (
    <div className="p-2 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Name on card" value="Alex jones" />
        <IconFormField
          label="Card number"
          placeholder="0000 0000 0000 0000"
          icon={<FaCreditCard />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Expire date" placeholder="MM/YY" />
        <IconFormField label="CVC" value="123" icon={<BsThreeDots />} />
      </div>
    </div>
  );
};

export default AddNewCardForm;
