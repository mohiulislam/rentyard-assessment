import React, { FC, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFooter } from "../context/FooterContext";
import { PaymentFooter } from "../components/footers/PageFooters";

// Import all necessary components
import PricingToggle from "../components/pricing/PricingToggle";
import PricingCard from "../components/pricing/PricingCard";
import Modal from "../components/Modal"; // <-- 1. Import Modal
import AddNewCardForm from "../components/forms/AddNewCardForm"; // <-- 2. Import the new form
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
  const { setFooterActions } = useFooter();

  // Page state
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );
  const [selectedPlan, setSelectedPlan] = useState<string>("Regular");
  const [selectedPaymentId, setSelectedPaymentId] = useState<number>(1);
  const total = 970;

  // 3. Add state and handlers for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openCardModal = () => setIsModalOpen(true);
  const closeCardModal = () => setIsModalOpen(false);

  // Set the dynamic footer
  useEffect(() => {
    setFooterActions(
      <PaymentFooter
        total={total}
        onBack={() => navigate("/property-details")}
        onPay={() => alert("Processing payment...")}
      />
    );
    return () => setFooterActions(null);
  }, [setFooterActions, navigate, total]);

  // Custom footer for the "Add new card" modal
  const addCardModalFooter = (
    <div className="flex justify-end">
      <button className="px-8 py-3 bg-[#316EED] text-white font-bold rounded-xl hover:bg-blue-700">
        Save
      </button>
    </div>
  );

  return (
    <>
      <div className="py-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <section className="flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Chose a plan for after 30-days free trial
            </h1>
            <PricingToggle
              billingCycle={billingCycle}
              onToggle={setBillingCycle}
            />
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                {/* 4. Attach the openModal function to the button */}
                <button
                  onClick={openCardModal}
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
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
      {/* 5. Render the Modal component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeCardModal}
        title="Add new card"
        footer={addCardModalFooter}
      >
        <AddNewCardForm />
      </Modal>
    </>
  );
};

export default PricingPage;
