import React, { useState } from "react";
import "./style.css";

const UseState = () => {

  const [num, setNum] = useState(0)

  return (
    <>
      <div className="Overall">
        <div className="using-state">
        <p className="para" >{num}</p>
        <button className="button2"
          onClick={() => setNum(num + 1)}
        >
          Increment
        </button>
        <button
          className="button2"
          onClick={() => (num > 0 ? setNum(num - 1) : setNum(0))}
        >
          Decrement
        </button>
        </div>
      </div>
    </>
  );
};

export default UseState;