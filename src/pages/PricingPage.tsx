import React, { FC, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFooter } from "../context/FooterContext";
import { PaymentFooter } from "../components/footers/PageFooters";

// Import all the necessary sub-components
import PricingToggle from "../components/pricing/PricingToggle";
import PricingCard from "../components/pricing/PricingCard";
import PaymentMethodRow from "../components/PaymentMethodRow";


const plans = [
  {
    name: "Regular",
    price: { monthly: 99.99, annually: 42.99 },
    hasAutoPay: true,
  },
  { name: "Platinum", price: { monthly: 129.99, annually: 55.89 } },
  { name: "Enterprise", price: { monthly: 199.99, annually: 85.99 } },
];

const paymentMethods = [
  { id: 1, info: "Alex jones(Amex card) ************8565" },
  { id: 2, info: "Alex jones(Amex card) ************8565" },
  { id: 3, info: "Alex jones(Amex card) ************8565" },
];

const PricingPage: FC = () => {
  const navigate = useNavigate();
  const { setFooterContent } = useFooter();

  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );
  const [selectedPlan, setSelectedPlan] = useState<string>("Regular");
  const [selectedPaymentId, setSelectedPaymentId] = useState<number>(1);

  const total = 970;

  useEffect(() => {
    setFooterContent(
      <PaymentFooter
        total={total}
        onBack={() => navigate("/add-property-info")}
        onPay={() => alert(`Processing payment of $${total.toFixed(2)}`)}
      />
    );
    return () => setFooterContent(null);
  }, [setFooterContent, navigate, total]);

  return (
    <div className="py-8 bg-white">
      <div className="flex flex-col gap-8">
        <section>
          <h1 className="text-3xl font-bold text-gray-900">
            Chose a plan for after 30-days free trial
          </h1>
        </section>

        {/* CORRECTED: Added 'self-start' to this section to prevent it from stretching to full-width */}
        <section className="self-start">
          <PricingToggle
            billingCycle={billingCycle}
            onToggle={setBillingCycle}
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              planName={plan.name}
              price={plan.price[billingCycle].toFixed(2)}
              description="Price for 1-50 unit"
              isSelected={selectedPlan === plan.name}
              hasAutoPay={plan.hasAutoPay}
              onSelect={() => setSelectedPlan(plan.name)}
            />
          ))}
        </section>

        <section>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-gray-800">
                Payment option
              </h2>
              <button className="text-sm font-semibold text-blue-600 hover:underline">
                Add new card
              </button>
            </div>
            <div>
              {paymentMethods.map((method) => (
                <PaymentMethodRow
                  key={method.id}
                  cardInfo={method.info}
                  isSelected={selectedPaymentId === method.id}
                  onSelect={() => setSelectedPaymentId(method.id)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingPage;
