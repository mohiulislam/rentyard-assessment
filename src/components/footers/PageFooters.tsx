import type { FC } from "react";

// --- For Back / Next / Get Started buttons ---
export interface ActionFooterProps {
  onBack?: () => void;
  onNext?: () => void;
  nextText?: string;
  isNextDisabled?: boolean;
}

export const ActionFooter: FC<ActionFooterProps> = ({
  onBack,
  nextText = "Next",
  onNext,
  isNextDisabled = false,
}) => (
  <>
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
    <button
      onClick={onNext}
      disabled={isNextDisabled}
      className="w-[128px] h-[47px] flex items-center justify-center bg-[#316EED] rounded-[12px] font-fustat font-semibold text-base text-white disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {nextText}
    </button>
  </>
);

// --- For the Payment Page footer ---
export interface PaymentFooterProps {
  total: number;
  onBack?: () => void;
  onPay?: () => void;
}

export const PaymentFooter: FC<PaymentFooterProps> = ({
  total,
  onBack,
  onPay,
}) => (
  <>
    <button
      onClick={onBack}
      className="font-fustat font-semibold text-base underline text-[#272B35] hover:text-blue-600 transition-colors"
    >
      Back
    </button>
    <div className="flex items-center gap-4">
      <div className="text-right">
        <p className="text-sm text-gray-500">Total with card charge:</p>
        <p className="text-xl font-bold text-gray-900">${total.toFixed(2)}</p>
      </div>
      <button
        onClick={onPay}
        className="w-[188px] h-[47px] flex items-center justify-center bg-[#316EED] rounded-lg hover:bg-blue-700 shadow-md text-white font-semibold"
      >
        Pay & add property
      </button>
    </div>
  </>
);
