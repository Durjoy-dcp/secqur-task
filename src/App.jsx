import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { storage } from "./Firebase/firebase.init";
import { getDownloadURL, ref } from "firebase/storage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const secret = import.meta.env.VITE_MY_SECRET;
  const [imgurl, setImage] = useState("");
  useEffect(() => {
    const pathRef = ref(storage, "Images/Female01.jpg");
    getDownloadURL(pathRef).then((url) => {
      console.log(url);
      setImage(url);
    });
    // console.log(url);
    // setImage(url);
  }, []);

  return (
    <div className="App">
      <img src={imgurl} alt="hello" />
    </div>
  );
}

export default App;
