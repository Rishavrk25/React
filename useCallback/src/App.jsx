import React, { useCallback } from 'react'
import { useState } from 'react';
import { useMemo } from 'react';
import ChildComponent from './components/ChildComponent';
import ExpComponent from './components/ExpComponent'

const App = () => {
  // const [count,setCount]=useState(0);

  // useCallback 
  // -> unneccessary re-render of child component
  // -> handling expensive operation

  // const handleIncrement = useCallback(() => {
  //   setCount(count+1)
  // },[]);
   

  return (
    <div>
      <ExpComponent/>
    </div>


    // <div>
    //   <button onClick={handleIncrement}>
    //     Increment
    //   </button>
    //   <div>
    //     Count: {count}
    //   </div>
    //   <div>
    //     <ChildComponent buttonName="Click me" handleClick={handleIncrement}/>
    //   </div>
    // </div>
  )
}

export default App
