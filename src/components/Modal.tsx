import React, { FC, useEffect } from "react";
import { FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode; // <-- 1. Add optional footer prop
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[14px] w-[780px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 bg-[#F4F4F4] border-b border-[#E0E0E0] rounded-t-[14px] h-[60px]">
          <h3 className="font-fustat font-semibold text-[16px] text-[#6F6C6A]">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200"
          >
            <FiX size={24} className="text-[#6F6C6A]" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4">{children}</div>

        {/* 2. Update Footer Logic */}
        <div className="px-4 pb-4">
          <div className="border-t border-[#E0E0E0] pt-4">
            {footer ? (
              // Render custom footer if provided
              footer
            ) : (
              // Render default footer otherwise
              <div className="flex justify-end">
                <button className="px-6 py-3 bg-[#316EED] text-white font-fustat font-bold text-base rounded-xl hover:bg-blue-700">
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
