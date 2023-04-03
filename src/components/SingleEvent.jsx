import React from "react";

const SingleEvent = ({ event }) => {
  // console.log(event);
  return (
    <div className=" bg-[#D9D9D9] p-2 m-2 rounded ">
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
