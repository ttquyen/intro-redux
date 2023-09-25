import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, addCounter, removeCounter } from "./action";
function MultiCounter() {
  const multiCounter = useSelector((state) => state.multiCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addCounter())}>Add Counter</button>
      {multiCounter.map((counter, index) => (
        <div key={index} style={{ padding: 10 }}>
          <button onClick={() => dispatch(increase(index))}>+</button>
          <span>{counter.count}</span>
          <button onClick={() => dispatch(decrease(index))}>-</button>
          <button
            style={{ margin: 10 }}
            onClick={() => dispatch(removeCounter(index))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default MultiCounter;
