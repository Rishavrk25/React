import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';

const App = () => {
  const [count,setCount]=useState(0);
  const [input,setInput]=useState(0);

  function handleIncrement(){
    setCount(count+1);
  }
  function expensiveTask(num){
    console.log("Inside expensive task");
    for(let i=0;i<=1000000000;i++){}
    return num*2;
  }

  let doubleValue= useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <div>
        Count: {count}
      </div>
      <input type="Number" value={input} onChange={(e) => setInput(e.target.value)}/>
      <div>
        Double: {doubleValue}
      </div>
    </div>
  )
}

export default App
