import React, { FC } from 'react';
import SelectDropdown from '../Form/SelectDropdown';
import DatePickerField from '../Form/DatePickerField';

const RentFrequencyForm: FC = () => {
    const frequencyOptions = ["Monthly", "Quarterly", "Every 6 months", "Yearly"];

    return (
        // CORRECTED: Added 'items-end' to the grid container to align all
        // fields along their bottom edge, fixing the vertical misalignment.
        <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <SelectDropdown
                label="Rent payment frequency*"
                options={frequencyOptions}
                initialValue="Monthly"
            />
            <DatePickerField
                label="Rent Reminder/Statement date*"
                value="25th Every month"
            />
            <DatePickerField
                label="Rent due date*"
                value="5th Every month"
            />
        </div>
    );
};

export default RentFrequencyForm;