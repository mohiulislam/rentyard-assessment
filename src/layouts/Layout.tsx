import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/imgs/logo.png"; // Assuming path to your logo

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Header */}
      <header
        className="
          h-[79px]
          border-b border-gray-300
          bg-white
          w-full
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

      {/* 2. Main Content */}
      <main className="w-full flex-grow">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <Outlet />
        </div>
      </main>

      {/* 3. Footer */}
      <footer
        className="
          w-full h-24
          bg-white
        "
        style={{ boxShadow: "0px 4px 30px rgba(46, 45, 116, 0.05)" }}
      >
        <div
          className="
            max-w-[1440px] h-full mx-auto
            flex items-center justify-between
            px-4 sm:px-6 md:px-8
          "
        >
          <button className="font-fustat font-semibold text-base underline text-[#272B35] hover:text-blue-600 transition-colors">
            Back
          </button>
          <button
            disabled
            className="
              w-[128px] h-[47px]
              flex items-center justify-center
              bg-[#316EED] opacity-30 rounded-[12px]
              font-fustat font-semibold text-base text-white
              cursor-not-allowed
            "
          >
            Get started
          </button>
        </div>
      </footer>
    </div>
  );
}
