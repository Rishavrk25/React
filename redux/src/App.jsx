import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment , incrementByAmount, reset } from './features/counter/counterSlice';

const App = () => {
  const [amount,setAmount]=useState();

  const count=useSelector((state) => state.counter.value);
  const dispatch=useDispatch();

  function handleIncrementClick(){
      dispatch(increment());
  }
  function handleDecrementClick(){
      dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleIncAmountClick(){
      dispatch(incrementByAmount(amount));
  }

  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br/>
      <br/>
      <button onClick={handleResetClick}>Reset</button>
      <br/>
      <br/>
      <input type="Number" value={amount} placeholder='Enter amount' onChange={(e) => setAmount(e.target.value)} />
      <br/>
      <br/>
      <button onClick={handleIncAmountClick}>Inc by Amount</button>
    </div>
  )
}
export default App
