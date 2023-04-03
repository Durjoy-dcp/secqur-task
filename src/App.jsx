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

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/navbar",
      element: <Navbar></Navbar>,
    },
  ]);

  // useEffect(() => {
  //   onValue(
  //     ref(db, "1qGs4CXNhDDcrDDbWrbqeLdhUUYiNWAMH_KmjB9j-bqk/Sheet1"),
  //     (snapshot) => {
  //       const data = snapshot.val();
  //       console.log(data);
  //       // if (data !== null) {
  //       //   console.log(data);
  //       // }
  //     }
  //   );
  // }, []);
  // const [count, setCount] = useState(0);
  // const secret = import.meta.env.VITE_MY_SECRET;
  // const [imgurl, setImage] = useState("");
  // useEffect(() => {
  //   const pathRef = ref(storage, "Images/Female01.jpg");
  //   getDownloadURL(pathRef).then((url) => {
  //     console.log(url);
  //     setImage(url);
  //   });
  //   // console.log(url);
  //   // setImage(url);
  // }, []);

  return (
    <div className="max-h-screen m-0 p-0">
      <RouterProvider router={router} />
    </div>

    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content text-center">
    //     <div className="max-w-md">
    //       <h1 className="text-5xl font-bold">Hello there</h1>
    //       <p className="py-6">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //         a id nisi.
    //       </p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
