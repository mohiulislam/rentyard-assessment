import type { FC } from "react";
import { FiCheckSquare } from "react-icons/fi";

interface PricingCardProps {
  planName: string;
  price: string;
  description: string;
  isSelected: boolean;
  hasAutoPay?: boolean;
  onSelect: () => void;
  className?: string;
}

const PricingCard: FC<PricingCardProps> = ({
  planName,
  price,
  description,
  isSelected,
  hasAutoPay = false,
  onSelect,
  className = "",
}) => {
  const containerClasses = `
    p-6 border rounded-[10px] cursor-pointer transition-all duration-300
    ${
      isSelected
        ? "border-[1.5px] border-[#316EED] bg-[#F5F8FF]"
        : "border-[#D8D8D8] bg-white hover:border-gray-400"
    }
    ${className}  // ✅ Allow custom class from props
  `;

  return (
    <div className={containerClasses} onClick={onSelect}>
      <div className="flex justify-between items-center mb-6">
        <div
          className={`py-3 px-4 rounded-md text-xl font-bold ${
            isSelected ? "bg-transparent" : "bg-[#F4F4F4]"
          }`}
        >
          {planName}
        </div>
        {hasAutoPay && (
          <button
            className={`flex items-center gap-2 text-base font-bold transition-colors ${
              isSelected ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <FiCheckSquare
              className={isSelected ? "text-blue-600" : "text-gray-400"}
              size={24}
            />
            Auto Pay
          </button>
        )}
      </div>
      <div className="mb-2">
        <span className="text-5xl font-bold text-gray-900">${price}</span>
        <span className="text-lg text-gray-500">/mo</span>
      </div>
      <p className="text-base text-[#4C4A54]">{description}</p>
    </div>
  );
};

export default PricingCard;
