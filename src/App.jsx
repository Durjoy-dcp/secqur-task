import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ref } from "firebase/database";
// import { storage } from "./Firebase/firebase.init";
import "./App.css";
import { onValue } from "firebase/database";
import { db } from "./Firebase/firebase.init";

function App() {
  useEffect(() => {
    onValue(
      ref(db, "1qGs4CXNhDDcrDDbWrbqeLdhUUYiNWAMH_KmjB9j-bqk/Sheet1"),
      (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        // if (data !== null) {
        //   console.log(data);
        // }
      }
    );
  }, []);
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

  return <div className="App">{/* <img src={imgurl} alt="hello" /> */}</div>;
}

export default App;
