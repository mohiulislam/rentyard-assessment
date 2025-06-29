import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../assets/imgs/logo.png"; // Make sure this path is correct
import { useFooter } from "../context/FooterContext";

// Helper for a single progress bar segment
const ProgressSegment: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div
    className={`flex-1 h-full transition-colors duration-300 ${
      isActive ? "bg-[#272B35]" : "bg-[#E0E0E0]"
    }`}
  ></div>
);

export default function Layout() {
  const { footerActions } = useFooter();
  const location = useLocation();

  // Determine the current step based on the URL
  const totalSteps = 3;
  let currentStep = 0;
  switch (location.pathname) {
    case "/":
      currentStep = 1;
      break;
    case "/property-details":
      currentStep = 2;
      break;
    case "/pricing":
      currentStep = 3;
      break;
    default:
      currentStep = 0; // Hide stepper on other pages
  }

  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 w-full z-40 h-[79px] border-b border-gray-300 bg-white">
        <div className="mx-auto max-w-[1440px] h-full flex items-center justify-between px-4 sm:px-6 md:px-20">
          <img src={logo} alt="RentYard Logo" className="h-[38px] w-auto" />
          <button
            type="button"
            className="w-[128px] h-[47px] flex items-center justify-center border border-[#E0E0E0] rounded-xl font-semibold text-base"
          >
            Save & Exit
          </button>
        </div>
      </header>

      <main className="w-full pt-[79px] pb-24">
        {/* The max-width and padding for page content is controlled here */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20">
          <Outlet />
        </div>
      </main>

      <footer
        className="fixed bottom-0 left-0 w-full z-40 flex flex-col bg-white"
        style={{ boxShadow: "0px -4px 30px rgba(46, 45, 116, 0.05)" }}
      >
        {currentStep > 0 && (
          <div className="w-full h-1 flex flex-row items-center gap-2.5">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <ProgressSegment key={index} isActive={index < currentStep} />
            ))}
          </div>
        )}
        <div className="h-24 max-w-[1440px] w-full mx-auto flex items-center justify-between px-4 sm:px-6 md:px-20">
          {footerActions}
        </div>
      </footer>
    </div>
  );
}
