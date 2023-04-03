import React, { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import InfoContext, { InformationContext } from "./InfoContext";

const Sidebar = () => {
  return (
    <div>
      <RxHamburgerMenu className="text-3xl ml-3" />
    </div>
  );
};

export default Sidebar;
