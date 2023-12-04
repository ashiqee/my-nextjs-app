"use client";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary"
      >
        Increase
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn bg-slate-500 p-2 btn-primary"
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
