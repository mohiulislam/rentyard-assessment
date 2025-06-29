import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/imgs/logo.png"; // Assuming path to your logo
import { useFooter } from "../context/FooterContext"; // Import the custom hook

export default function Layout() {
  const { footerContent } = useFooter();

  return (
    <div className="bg-white">
      {/* 1. Header - Now with fixed positioning */}
      <header
        className="
          fixed top-0 left-0 w-full z-40  // <-- Added classes for fixed positioning
          h-[79px]
          border-b border-gray-300
          bg-white
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            h-full
            flex items-center justify-between
            px-4 sm:px-6 md:px-8
          "
        >
          <img
            src={logo}
            alt="Logo"
            className="
              w-[100px] sm:w-[120px] md:w-[147.28px]
              h-auto object-contain
            "
          />
          <button
            type="button"
            className="
              flex-none
              text-sm md:text-base
              w-[60px] h-[40px] md:w-[75px] md:h-[47px]
              flex items-center justify-center
              px-4 py-2 md:px-6 md:py-3
              gap-2
              border border-[#E0E0E0] rounded-lg md:rounded-[12px]
              text-[#272B35]
              font-semibold
              bg-white
              cursor-pointer
              transition-colors duration-200 ease-in-out
              hover:bg-gray-50
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              active:bg-gray-100
            "
          >
            Exit
          </button>
        </div>
      </header>

      {/* 2. Main Content - Now with padding to avoid overlap */}
      <main className="w-full pt-[79px] pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <Outlet />
        </div>
      </main>

      {/* 3. Footer - Now with fixed positioning */}
      <footer
        className="
          fixed bottom-0 left-0 w-full z-40 // <-- Added classes for fixed positioning
          h-24
          bg-white
        "
        style={{ boxShadow: "0px -2px 12px rgba(39, 43, 53, 0.1)" }}
      >
        <div
          className="
            max-w-[1440px] h-full mx-auto
            flex items-center justify-between
            px-4 sm:px-6 md:px-8
          "
        >
          {/* The dynamic content from the context will be rendered here */}
          {footerContent}
        </div>
      </footer>
    </div>
  );
}
