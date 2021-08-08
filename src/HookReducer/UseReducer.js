import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action ) =>{
if(action.type == "INCR"){
    state = state + 1;
}
if(state > 0 && action.type == "DECR") {
    state = state - 1;
}
return state;
}

const UseReducer = () => {

 const initialData =0;
const [state, dispatch] = useReducer(reducer, initialData);


  return (
    <>
      <div className="Overall">
        <div className="using-state">
        <p className="para"> { state }</p>
        <button className="button2"
        onClick={() => dispatch({ type: 'INCR'} )}
        >
          Increment
        </button>
        <button
          className="button2"
          onClick={() => dispatch({ type: 'DECR'})}
        >
          Decrement
        </button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;