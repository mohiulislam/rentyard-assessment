import React, { FC } from "react";

interface StepperFooterProps {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  onNext?: () => void;
  nextText?: string;
  isNextDisabled?: boolean;
}

const StepperFooter: FC<StepperFooterProps> = ({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  nextText = "Next",
  isNextDisabled = false,
}) => {
  return (
    <div className="relative w-full h-full flex items-center justify-between">
      {/* Progress Bar Container */}
      <div className="absolute top-0 left-0 w-full h-1 flex flex-row">
        {/* Create a segment for each step */}
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex-1 h-full">
            <div
              className={`h-full w-full transition-colors duration-500 ${
                index < currentStep ? "bg-[#272B35]" : "bg-[#E0E0E0]"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div>
        {onBack && (
          <button
            onClick={onBack}
            className="font-fustat font-semibold text-base underline text-[#272B35] hover:text-blue-600 transition-colors"
          >
            Back
          </button>
        )}
      </div>

      {/* Next/Action Button */}
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className="w-[128px] h-[47px] flex items-center justify-center bg-[#316EED] rounded-[12px] font-fustat font-semibold text-base text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {nextText}
      </button>
    </div>
  );
};

export default StepperFooter;
