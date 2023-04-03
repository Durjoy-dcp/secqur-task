import React, { Children, createContext } from "react";
export const InformationContext = createContext();

const InfoContext = ({ children }) => {
  const Info = { val: 42 };
  return (
    <InformationContext.Provider value={Info}>
      {children}
    </InformationContext.Provider>
  );
};

export default InfoContext;
