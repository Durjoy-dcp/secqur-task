import React, { useContext } from "react";
import { InformationContext } from "./InfoContext";

const SingleEvent = ({ event }) => {
  const { currentInfo, setCurrnetInfo } = useContext(InformationContext);
  return (
    <div
      className=" bg-[#D9D9D9] p-2 m-2 rounded "
      onClick={() => setCurrnetInfo(event)}
    >
      <div className="flex justify-between  items-center ">
        <div>{event.ID}</div>
        <div className="text-xs">
          {event.Date} {event.Time}
        </div>
      </div>
      <div>Person detected</div>
    </div>
  );
};

export default SingleEvent;
