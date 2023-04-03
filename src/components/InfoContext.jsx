import React, { Children, createContext, useState } from "react";
export const InformationContext = createContext();

const InfoContext = ({ children }) => {
  const [currentInfo, setCurrnetInfo] = useState({});

  const Info = { currentInfo, setCurrnetInfo };
  return (
    <InformationContext.Provider value={Info}>
      {children}
    </InformationContext.Provider>
  );
};

export default InfoContext;
