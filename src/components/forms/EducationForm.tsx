import React, { FC } from 'react';
import SelectDropdown from '../Form/SelectDropdown';
import FormField from '../Form/FormField';
import InputWithDropdown from '../Form/InputWithDropdown'; // <-- Import the new component

const EducationForm: FC = () => {
    const institutionTypes = ["High school", "College", "University", "Elementary School"];
    const distanceUnits = ["Mile", "KM"]; // <-- Define options here

    return (
        <div className="p-2 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <SelectDropdown label="Educational institution type*" options={institutionTypes} initialValue="High school" />
                {/* Use the new component with its props */}
                <InputWithDropdown 
                    label="Distance from property*" 
                    inputValue="1.5"
                    options={distanceUnits}
                    initialOption="Mile"
                />
            </div>
            <FormField label="Educational institution name*" placeholder="Enter name" />
        </div>
    );
};

export default EducationForm;