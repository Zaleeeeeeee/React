import React from "react";
import { useState } from "react";

/* 

  Usestate working:

  function useState(initialValue){
  return [initialValue, ()=>{ }]
  }

*/

export const Counter = () => {
  let count = 100;
  const [stateValue, setValue] = useState(9999);

  /* Cannot change stateValue directly */

  function incrementValue() {
    let newValue = stateValue + 1;
    setValue(newValue);
  }

  function decrementStateValue() {
    setValue(stateValue - 1);
  }

  function increment() {
    count++;
    console.log("increment..", count);
  }

  const decrement = () => {
    count--;
    console.log("decrement", count);
  };

  console.log("render");
  return (
    <div>
      <h1 className="text-5xl bg-slate-400 underline underline-offset-4 text-center p-3 border ">
        {" "}
        Counter: {count}{" "}
      </h1>
      <h1 className="m-4 text text-3xl font"> Value: {stateValue} </h1>
      <hr />
      <button
        className="border-double border-4 border-sky-500 rounded-md p-2 w-52 m-4 bg-black text-white"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="border-double border-4 border-sky-500 rounded-md p-2 w-52 ml-3 bg-black text-white"
        onClick={incrementValue}
      >
        Increment state value
      </button>
      <br />
      <button
        className="border-double border-4 border-sky-500 rounded-md p-2 w-52 m-4 bg-black text-white"
        onClick={decrement}
      >
        Decrement
      </button>
      <button
        className="border-double border-4 border-sky-500 rounded-md p-2 w-52 ml-3 bg-black text-white"
        onClick={decrementStateValue}
      >
        Decrement State Value
      </button>
    </div>
  );
};
