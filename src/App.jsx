import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ref } from "firebase/database";
// import { storage } from "./Firebase/firebase.init";
import { onValue } from "firebase/database";
import { db } from "./Firebase/firebase.init";
import Event from "./components/Event";
import Components from "./components/Components";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="max-h-screen m-0 p-0">
      <Navbar></Navbar> <Components></Components>
    </div>
  );
}

export default App;
