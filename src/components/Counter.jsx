import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCount,
  decrementCount,
  reset,
  incrementByAmount,
} from "../reducers/counterSlice";

function Counter() {
  const [increament, setIncreament] = useState(0);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(incrementCount());
  };

  const handleDecrease = () => {
    dispatch(decrementCount());
  };
  const handlerReset = () => {
    setIncreament(0);
    dispatch(reset());
  };
  const handleAddAmount = (addValue) => {
    dispatch(incrementByAmount(addValue));
  };

  const addValue = Number(increament) || 0;
  return (
    <section>
      <div>
        <p>{count}</p>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
      <button onClick={handlerReset}>Reset</button>
      <input
        type="text"
        value={increament}
        onChange={(e) => setIncreament(e.target.value)}
      />
      <button onClick={() => handleAddAmount(addValue)}>Add</button>
    </section>
  );
}

export default Counter;
