import React, { useCallback } from 'react'
import { useState } from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const ExpComponent = () => {
  const [count,setCount]=useState(0);
  const [input,setInput]=useState("");
  const previousFunction=useRef(null);

  function handleIncrement(){
    setCount(count+1);
  }
  
 const expensiveTask = useCallback(() => {
  console.log("Inside expensive task");
  let result=0;
  for(let i=0;i<=1000000000;i++){
    result+=i;
  }
  return result;
  
},[count]);

useEffect(() => {
  if(previousFunction.current){
    if(previousFunction.current===expensiveTask){
      console.log("Function not re-created");
    }
    else{
      console.log("Function got re-created");
    }
  }
  else{
    previousFunction.current=expensiveTask;
  }

  
}, [expensiveTask])



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
        Double: {expensiveTask()}
      </div>
    </div>
  )
}

export default ExpComponent
