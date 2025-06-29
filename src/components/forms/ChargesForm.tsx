import React, { FC } from 'react';
import FormField from '../Form/FormField';
import FeeInput from '../Form/FeeInput'; // <-- 1. Import our new component

const ChargesForm: FC = () => {
    // Define the options for the dropdown part of the fee input
    const applicantOptions = ["All 18+ applicant", "Per Applicant", "Per Household"];

    return (
        // 2. Use a clean 2-column grid. The alignment is now handled correctly inside FeeInput.
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeeInput 
                label="Application fee(one-time)*"
                defaultValue="100"
                options={applicantOptions}
                initialOption="All 18+ applicant"
            />
            
            <FormField 
                label="Admin fee(one-time)*"
                value="15"
            />
        </div>
    );
};

export default ChargesForm;