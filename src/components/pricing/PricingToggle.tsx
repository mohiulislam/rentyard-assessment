import type { FC } from "react";

interface PricingToggleProps {
  billingCycle: "monthly" | "annually";
  onToggle: (cycle: "monthly" | "annually") => void;
}

const PricingToggle: FC<PricingToggleProps> = ({ billingCycle, onToggle }) => {
  // Base classes for both buttons for consistency
  const baseButtonClasses =
    "px-8 py-2.5 rounded-[10px] text-sm font-bold transition-colors duration-300";

  // Classes for the active state, matching Figma
  const activeClasses = "bg-[#E2EBFF] text-[#316EED]";

  // Classes for the inactive state, matching Figma
  const inactiveClasses = "bg-transparent text-[#272B35] hover:bg-gray-50";

  return (
    // Main container with the correct border and padding
    <div className="flex items-center gap-1 p-1.5 bg-white border border-[#E0E0E0] rounded-[10px]">
      <button
        onClick={() => onToggle("monthly")}
        className={`${baseButtonClasses} ${
          billingCycle === "monthly" ? activeClasses : inactiveClasses
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onToggle("annually")}
        className={`${baseButtonClasses} ${
          billingCycle === "annually" ? activeClasses : inactiveClasses
        } flex items-center gap-2`}
      >
        Annually
        <span className="text-green-600 font-medium">(save 57%)</span>
      </button>
    </div>
  );
};

export default PricingToggle;
