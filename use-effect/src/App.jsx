import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  const [count, setCount] = useState(0);
  const [total,setTotal]=useState(1);
  // first -> side effect function
  // second -> clean-up function
  // third -> comma separated dependency list
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])


  // variation-1
  // runs on every render
  // useEffect(() => {
  //   alert("I will run on each render");
  // })

  // variation-2
  // that runs on only first render
  // useEffect(() => {
  //   alert("I will run on only first render");
  // }, [])

  // variation-3
  // run every time when count is updated
  // useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count])
  
  // variation-4
  // multiple dependencies
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated");
  // }, [count,total])

  // variation-5
  // let's add a cleanup function
  useEffect(() => {
    alert("Count is updated");
    return () => {
      alert("Count is unmouted forn UI");
    }
  }, [count])
  
  


  function handleClick() {
    setCount(count + 1);
  }
  function handleClickTotal(){
    setTotal(total+1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Update Count
      </button>
      <br />
      Count is: {count}
      <br/>
      <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br />
      Total is: {total}
    </div>
  )
}

export default App
