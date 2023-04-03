import React from "react";

const Infromation = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-3 items-center ">
      <div className="">
        <div className="font-bold">
          <h3>EVTOOO</h3>
          <h4>Person Detected</h4>
        </div>
        <div className="text-xl mt-3">
          <p>Name: Female25</p>
          <p>Location: Chennai</p>
          <p>Date: 09-12</p>
          <p>Time: 13:23:53</p>
        </div>
        <div className="text-xl mt-3">
          <p>Description:</p>
          <p>
            Name detected at <br /> Location on date
          </p>
        </div>
      </div>
      <div className="">
        <h3 className="font-bold text-2xl">Female</h3>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sec-task2.appspot.com/o/Image%2FFemale01.jpg?alt=media&token=b9b007b0-661e-4fe9-9d59-d6e26250af93"
          alt=""
        />
      </div>
    </div>
  );
};

export default Infromation;
