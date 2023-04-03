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
  const [sta, setSta] = useState();
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
  const setEventHandler = () => {
    console.log("working");
  };
  useEffect(() => {
    getData();
    console.log(sta);
  }, []);

  return (
    <div>
      <div className="flex justify-between p-3 navbar ">
        <div>
          <p
            className="text-2xl font-bold navbar-start"
            onClick={setEventHandler}
          >
            Events
          </p>
        </div>
        <div className="  navbar-end">
          <RxHamburgerMenu className="text-3xl" />
        </div>
      </div>
      <div className="max-h-screen overflow-scroll">
        {Object.keys(events).map((event, id) => {
          // console.log(events[element]);
          return <SingleEvent key={id} event={events[event]}></SingleEvent>;
        })}
      </div>
    </div>
  );
};

export default Event;
