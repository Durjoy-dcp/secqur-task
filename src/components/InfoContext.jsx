import React, { Children, createContext, useState } from "react";
export const InformationContext = createContext();

const InfoContext = ({ children }) => {
  const [currentInfo, setCurrnetInfo] = useState({});
  const [imgurl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState({});
  const [gender, setgenderNumber] = useState({ male: 0, female: 0 });

  const Info = {
    currentInfo,
    setCurrnetInfo,
    imgurl,
    setImgUrl,
    loading,
    setLoading,
    events,
    setEvents,
    gender,
    setgenderNumber,
  };
  return (
    <InformationContext.Provider value={Info}>
      {children}
    </InformationContext.Provider>
  );
};

export default InfoContext;
