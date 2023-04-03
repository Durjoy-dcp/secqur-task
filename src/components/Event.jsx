import { getDatabase } from "firebase/database";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
// import { app } from "../Firebase/firebase.init";
import SingleEvent from "./SingleEvent";
import { onValue } from "firebase/database";
import { ref } from "firebase/database";
import { db } from "../Firebase/firebase.init";
const Event = () => {
  const [events, setEvents] = useState({});
  const getData = () => {
    onValue(
      ref(db, "1qGs4CXNhDDcrDDbWrbqeLdhUUYiNWAMH_KmjB9j-bqk/Sheet1"),
      (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        setEvents(data);
        // if (data !== null) {
        //   console.log(data);
        // }
      }
    );
  };
  useEffect(() => {
    getData();
  }, []);
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
      {Object.keys(events).map((event, id) => {
        // console.log(events[element]);
        return <SingleEvent key={id} event={events[event]}></SingleEvent>;
      })}
    </div>
  );
};

export default Event;
