import React, { Children, createContext, useState } from "react";
export const InformationContext = createContext();

const InfoContext = ({ children }) => {
  const [currentInfo, setCurrnetInfo] = useState({});
  const [imgurl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const Info = {
    currentInfo,
    setCurrnetInfo,
    imgurl,
    setImgUrl,
    loading,
    setLoading,
  };
  return (
    <InformationContext.Provider value={Info}>
      {children}
    </InformationContext.Provider>
  );
};

export default InfoContext;
