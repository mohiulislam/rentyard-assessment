import React, {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
} from "react";

// Define the shape of our context data
interface FooterContextType {
  footerContent: ReactNode;
  setFooterContent: (content: ReactNode) => void;
}

// Create the context with a default value
const FooterContext = createContext<FooterContextType | undefined>(undefined);

// Create the Provider component that will wrap our app
export const FooterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [footerContent, setFooterContent] = useState<ReactNode>(null);

  return (
    <FooterContext.Provider value={{ footerContent, setFooterContent }}>
      {children}
    </FooterContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useFooter = (): FooterContextType => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooter must be used within a FooterProvider");
  }
  return context;
};
