import React from "react";
import Event from "./Event";
const Components = () => {
  return (
    <div>
      <div className="min-h-screen   border mx-auto border-cyan-300 flex flex-row">
        <div className="basis-1/12 bg-[#5BB8F1]">Sidebar</div>
        <div className="basis-10/12 bg-white">Information</div>
        <div className="basis-1/2 bg-white border border-[#D9D9D9] border-8 ">
          <Event></Event>
        </div>
      </div>
    </div>
  );
};

export default Components;
