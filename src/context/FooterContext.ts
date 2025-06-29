import { createContext, useContext } from "react";
import type { ReactNode } from "react";

interface FooterContextType {
  footerActions: ReactNode;
  setFooterActions: (actions: ReactNode) => void;
}

export const FooterContext = createContext<FooterContextType | undefined>(
  undefined
);

export const useFooter = (): FooterContextType => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooter must be used within a FooterProvider");
  }
  return context;
};
