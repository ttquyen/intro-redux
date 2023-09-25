import React from "react";
import { useSelector, useDispatch } from "react-redux";
const INCREMENT = "COUNTER.INCREMENT";
const DECREMENT = "COUNTER.DECREMENT";
function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
    </div>
  );
}

export default Counter;
