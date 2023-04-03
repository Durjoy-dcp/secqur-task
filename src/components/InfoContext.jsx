import React, { Children, createContext, useEffect, useState } from "react";
export const InformationContext = createContext();

const InfoContext = ({ children }) => {
  const [currentInfo, setCurrnetInfo] = useState({});
  const [imgurl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState({});
  const [gender, setgenderNumber] = useState({ male: 0, female: 0 });
  const [selected, setSelected] = useState(-1);
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
    selected,
    setSelected,
  };
  useEffect(() => {
    let femaleNumber = 0;
    let maleNumber = 0;
    Object.keys(events).forEach((event) => {
      if (events[event].Gender == "Female") {
        femaleNumber++;
      } else {
        maleNumber++;
      }
    });
    const genderNumber = { male: maleNumber, female: femaleNumber };
    setgenderNumber(genderNumber);
  }, [events]);
  return (
    <InformationContext.Provider value={Info}>
      {children}
    </InformationContext.Provider>
  );
};

export default InfoContext;
