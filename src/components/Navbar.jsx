import React, { useContext } from "react";
import { InformationContext } from "./InfoContext";

const Navbar = () => {
  const { gender } = useContext(InformationContext);
  return (
    <div className="navbar bg-[#181C7B]">
      <div className="flex-1">
        <p className="btn btn-ghost normal-case font-extrabold text-xl align-baseline inline-block text-[#3A8380]">
          <span className="text-2xl">S</span>ECQUR
          <span className="text-[#E92518] text-2xl">AI</span>SE
        </p>
      </div>
      <div className="flex-none gap-4 mr-4">
        <div className="bg-[#92D050] px-4 py-2">{gender.male}</div>
        <div className="bg-[#E92518] px-4 py-2">{gender.female}</div>
      </div>
    </div>
  );
};

export default Navbar;
