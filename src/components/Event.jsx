import { getDatabase } from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
// import { app } from "../Firebase/firebase.init";
import SingleEvent from "./SingleEvent";
import { onValue } from "firebase/database";
import { ref } from "firebase/database";
import { db } from "../Firebase/firebase.init";
import { InformationContext } from "./InfoContext";
const Event = () => {
  const { events, setEvents, gender, setgenderNumber, selected, setSelected } =
    useContext(InformationContext);
  const [sta, setSta] = useState();
  const active = `bg-slate-600`;
  const inactive = "";

  const getData = () => {
    onValue(
      ref(db, "1qGs4CXNhDDcrDDbWrbqeLdhUUYiNWAMH_KmjB9j-bqk/Sheet1"),
      (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        setEvents(data);
        let maleNumber = 0;
        let femaleNumber = 0;
        Object.keys(events).forEach((event) => {
          if (events[event].Gender == "Female") {
            femaleNumber++;
          } else {
            maleNumber++;
          }
        });
        const genderNumber = { male: maleNumber, female: femaleNumber };
        setgenderNumber(genderNumber);
      }
    );
  };
  const setEventHandler = () => {
    console.log("working");
  };
  useEffect(() => {
    getData();
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
          return (
            <SingleEvent key={id} id={id} event={events[event]}></SingleEvent>
          );
        })}
      </div>
    </div>
  );
};

export default Event;
