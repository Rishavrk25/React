import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  // const [count, setCount] = useState(0);
  // let val = useRef(0); // persists its value across re-renders
  // // state variable -> re-render
  // // useRef variable -> no re-render
  // // DOM element -> directly access or change

  // let btnRef=useRef();

  // function handleIncrement() {
  //   val.current = val.current + 1;


  //   console.log("Value of val: ", val.current);
  //   setCount(count + 1);
  // }

  // // it runs on every render
  // useEffect(() => {
  //   console.log("main ferse reder hogya hu");
  // })

  // function changeColor() {
  //     btnRef.current.style.backgroundColor="red";
  // }

  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current=null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br /><br />

      <button onClick={stopTimer}>
        Stop
      </button>
      <br /><br />

      <button onClick={resetTimer}>
        Reset
      </button>




      {/* <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <br />

      <button onClick={changeColor}>
        Change Color of 1st button
      </button>
      <div>
        Count:{count}
      </div> */}
    </div>
  )
}

export default App
