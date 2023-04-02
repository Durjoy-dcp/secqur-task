import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import SingleEvent from "./SingleEvent";
const Event = () => {
  return (
    <div>
      <div className="flex justify-between p-3 navbar">
        <div>
          <p className="text-2xl font-bold navbar-start">Events</p>
        </div>
        <div className="  navbar-end">
          <RxHamburgerMenu className="text-3xl" />
        </div>
      </div>
      <SingleEvent></SingleEvent>
    </div>
  );
};

export default Event;
