import React, { useEffect, useState } from 'react'

const App = () => {
  const [timer,setTimer] = useState(10);
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(timer==0) return;
      setTimer(prev => prev - 1);
    },1000)
    return () => clearInterval(interval);
  },[timer])
  
  return (
    <div>
      <h1>App</h1>
      <h2>Countdown : {timer}</h2>
      <button onClick={()=>setTimer(10)}>reset</button>
    </div>
  )
}

export default App