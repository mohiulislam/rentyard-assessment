import { useState } from "react";
import type { FC, ReactNode } from "react";
import { FooterContext } from "./FooterContext";

export const FooterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [footerActions, setFooterActions] = useState<ReactNode>(null);

  return (
    <FooterContext.Provider value={{ footerActions, setFooterActions }}>
      {children}
    </FooterContext.Provider>
  );
};
