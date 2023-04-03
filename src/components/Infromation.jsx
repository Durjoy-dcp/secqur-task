import React, { useContext, useEffect, useState } from "react";
import { InformationContext } from "./InfoContext";
const Infromation = () => {
  const { imgurl, setImgUrl, loading } = useContext(InformationContext);

  const { currentInfo } = useContext(InformationContext);
  if (Object.keys(currentInfo).length === 0) {
    console.log("nothing here");
    return;
  }

  if (loading) {
    return "loading";
  }
  const date = new Date(currentInfo?.Date);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  const dateString = `${day}-${month}-${year}`;
  const Time = new Date(currentInfo?.Time);

  const timeString = currentInfo.Time.split("T")[1].slice(0, -5);
  const [hours, minutes, seconds] = timeString.split(":");
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return (
    <div className="grid grid-cols-2 gap-4 p-3 items-center ">
      <div className="">
        <div className="font-bold">
          <h3>{currentInfo.ID}</h3>
          <h4>Person Detected</h4>
        </div>
        <div className="text-xl mt-3">
          <p>Name: {currentInfo?.Name}</p>
          <p>Location: {currentInfo?.Location}</p>
          <p>Date: {dateString}</p>
          <p>Time: {formattedTime}</p>
        </div>
        <div className="text-xl mt-3">
          <p>Description:</p>
          <p>
            {`${currentInfo?.Name} detected at `}
            <br />
            {`${currentInfo?.Location} on ${dateString}`}
          </p>
        </div>
      </div>
      <div className="">
        <h3 className="font-bold text-2xl">{currentInfo.Gender}</h3>
        <img src={imgurl} alt="" />
      </div>
    </div>
  );
};

export default Infromation;
