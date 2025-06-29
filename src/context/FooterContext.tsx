import React, {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
} from "react";

// The context will now manage the 'actions' (buttons) part of the footer
interface FooterContextType {
  footerActions: ReactNode;
  setFooterActions: (actions: ReactNode) => void;
}

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const FooterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [footerActions, setFooterActions] = useState<ReactNode>(null);

  return (
    <FooterContext.Provider value={{ footerActions, setFooterActions }}>
      {children}
    </FooterContext.Provider>
  );
};

export const useFooter = (): FooterContextType => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooter must be used within a FooterProvider");
  }
  return context;
};
