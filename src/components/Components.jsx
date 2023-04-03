import React from "react";
import Event from "./Event";
import Infromation from "./Infromation";
import Sidebar from "./Sidebar";
const Components = () => {
  return (
    <div>
      <div className="min-h-screen   border mx-auto border-cyan-300 flex flex-row">
        <div className="basis-1/12 bg-[#5BB8F1] text-white ">
          <Sidebar></Sidebar>
        </div>
        <div className="basis-10/12 bg-white">
          <Infromation></Infromation>
        </div>
        <div className="basis-1/2 bg-white border border-[#D9D9D9] border-8 ">
          <Event></Event>
        </div>
      </div>
    </div>
  );
};

export default Components;
