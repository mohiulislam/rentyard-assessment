import { FaCcAmex } from "react-icons/fa";
import type { FC } from "react";

interface PaymentMethodRowProps {
  cardInfo: string;
  isSelected: boolean;
  onSelect: () => void;
  className?: string; // ✅ Added className prop
}

const PaymentMethodRow: FC<PaymentMethodRowProps> = ({
  cardInfo,
  isSelected,
  onSelect,
}) => {
  const buttonClasses = isSelected
    ? "bg-blue-600 text-white border-blue-600"
    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100";

  return (
    <div
      className={`
        flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0

      `}
    >
      <div className="flex items-center gap-4">
        <FaCcAmex size={28} className="text-blue-800" />
        <span className="font-semibold text-gray-700">{cardInfo}</span>
      </div>
      <button
        onClick={onSelect}
        className={`w-24 px-4 py-2 text-sm font-semibold rounded-lg transition-colors border ${buttonClasses}`}
      >
        {isSelected ? "Selected" : "Select"}
      </button>
    </div>
  );
};

export default PaymentMethodRow;
