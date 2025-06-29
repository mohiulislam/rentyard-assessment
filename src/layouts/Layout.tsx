import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import { useFooter } from "../context/FooterContext";
import { FiPlus } from "react-icons/fi";

// Custom CSS for larger pulse wave
const pulseStyles = `
  .custom-ping {
    animation: custom-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  @keyframes custom-ping {
    75%, 100% {
      transform: scale(3); /* Large wave */
      opacity: 0;
    }
  }
`;

// Inject custom CSS into the document
const styleSheet = document.createElement("style");
styleSheet.innerText = pulseStyles;
document.head.appendChild(styleSheet);

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
  const navigate = useNavigate();

  // Logic to determine the current step for the progress bar
  const totalSteps = 3;
  let currentStep = 0;
  switch (location.pathname) {
    case "/property-setup":
      currentStep = 1;
      break;
    case "/property-details":
      currentStep = 2;
      break;
    case "/pricing":
      currentStep = 3;
      break;
    default:
      currentStep = 0;
  }

  // Helper function to render the correct button in the header
  const renderHeaderButton = () => {
    if (location.pathname === "/") {
      // Show "+ Add Property" button on the homepage with smaller middle circle and large yellowish pulse wave
      return (
        <div className="relative">
          {/* Smaller middle circle with large pulse wave */}
          <span className="absolute -top-2 -right-2 flex h-6 w-6">
            <span className="custom-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-yellow-500"></span>
          </span>

          <button
            onClick={() => navigate("/property-setup")}
            className="w-auto h-[47px] flex items-center justify-center gap-2 px-4 bg-blue-600 text-white rounded-xl font-semibold text-base shadow-sm hover:bg-blue-700 transition-colors"
          >
            <FiPlus size={20} />
            <span>Add Property</span>
          </button>
        </div>
      );
    } else if (currentStep > 0) {
      // Show "Save & Exit" button during the multi-step process
      return (
        <button
          type="button"
          className="w-[128px] h-[47px] flex items-center justify-center border border-[#E0E0E0] rounded-xl font-semibold text-base"
        >
          Save & Exit
        </button>
      );
    }
    // Return nothing on other pages
    return null;
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 w-full z-40 h-[79px] border-b border-gray-300 bg-white">
        <div className="mx-auto max-w-[1440px] h-full flex items-center justify-between px-4 sm:px-6 md:px-20">
          <Link to="/">
            <img
              src={logo}
              alt="RentYard Logo"
              className="h-[38px] w-auto cursor-pointer"
            />
          </Link>

          {renderHeaderButton()}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full pt-[79px] pb-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20">
          <Outlet />
        </div>
      </main>

      {/* Footer Area */}
      <footer
        className="fixed bottom-0 left-0 w-full z-40 flex flex-col bg-white"
        style={{ boxShadow: "0px -2px 12px rgba(39, 43, 53, 0.1)" }}
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
