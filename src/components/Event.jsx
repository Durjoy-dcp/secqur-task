import { getDatabase } from "firebase/database";
import React, { useContext, useEffect, useRef, useState } from "react";
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
  const [mainEvents, setMainEvents] = useState({});
  const active = `bg-slate-600`;
  const inactive = "";
  const dateInputRef = useRef(null);
  const [date, setDate] = useState("");

  const getDataWithDate = (e) => {
    e.persist();
    setDate(e.target.value);
    // console.log("ss", dateInputRef.current);
    // console.log(date);
  };

  const getDataWithLocation = (location) => {
    const data = Object.keys(mainEvents)
      .filter((event, id) => mainEvents[event].Location === location)
      .map((event) => mainEvents[event]);
    setEvents(data);
    // console.log(data);
  };
  const getDataWithGender = (gender) => {
    const data = Object.keys(mainEvents)
      .filter((event, id) => mainEvents[event].Gender === gender)
      .map((event) => mainEvents[event]);
    setEvents(data);
    // console.log(data);
  };

  const getData = () => {
    onValue(
      ref(db, "1qGs4CXNhDDcrDDbWrbqeLdhUUYiNWAMH_KmjB9j-bqk/Sheet1"),
      (snapshot) => {
        const data = snapshot.val();
        // console.log(data);
        setMainEvents(data);
        setEvents(data);
      }
    );
  };
  const setEventHandler = () => {
    // console.log("working");
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (date !== "") {
      const selectedDate = new Date(date);
      selectedDate.setDate(selectedDate.getDate() - 1);
      const day = selectedDate.toISOString();
      const data = Object.keys(mainEvents)
        .filter(
          (event, id) =>
            mainEvents[event].Date.toString().split("T")[0] ===
            day.toString().split("T")[0]
        )
        .map((event) => mainEvents[event]);
      setEvents(data);
    }
  }, [date]);

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
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost ">
              <div className="w-10 rounded-full">
                <RxHamburgerMenu className="text-3xl" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="">
                  Location
                  <div className="flex flex-wrap ">
                    <button
                      className=" m-2 p-2  btn btn-xs"
                      onClick={() => getDataWithLocation("Chennai")}
                    >
                      Chennai
                    </button>
                    <button
                      onClick={() => getDataWithLocation("Hyderabad")}
                      className=" m-2 p-2  btn btn-xs"
                    >
                      Hyderabad
                    </button>
                    <button
                      className=" m-2 p-2 btn btn-xs "
                      onClick={() => getDataWithLocation("Bangalore")}
                    >
                      Bangalore
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  Gender
                  <div className="">
                    <div className="flex flex-wrap ">
                      <button
                        className=" m-2 p-2  btn btn-xs"
                        onClick={() => getDataWithGender("Male")}
                      >
                        Male
                      </button>
                      <button
                        onClick={() => getDataWithGender("Female")}
                        className=" m-2 p-2  btn btn-xs"
                      >
                        Female
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  Date{" "}
                  <input
                    type="date"
                    ref={dateInputRef}
                    onChange={getDataWithDate}
                  />
                </div>
              </li>
            </ul>
          </div>
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
