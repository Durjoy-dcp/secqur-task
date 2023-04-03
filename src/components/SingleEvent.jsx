import React, { useContext } from "react";
import { InformationContext } from "./InfoContext";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../Firebase/firebase.init";

const SingleEvent = ({ event }) => {
  const { currentInfo, setCurrnetInfo, setImgUrl, loading, setLoading } =
    useContext(InformationContext);

  const setUrlOfPic = (name) => {
    console.log("dhukse");
    const pathRef = ref(storage, `Image/${name}.jpg`);
    getDownloadURL(pathRef).then((url) => {
      console.log(url);
      setImgUrl(url);
      setLoading(false);
    });
  };
  const setInfoPic = () => {
    setLoading(true);
    setCurrnetInfo(event);
    setUrlOfPic(event.Name);
  };
  return (
    <div className=" bg-[#D9D9D9] p-2 m-2 rounded " onClick={setInfoPic}>
      <div className="flex justify-between  items-center ">
        <div>{event.ID}</div>
        <div className="text-xs">
          {event.Date} {event.Time}
        </div>
      </div>
      <div>Person detected</div>
    </div>
  );
};

export default SingleEvent;
