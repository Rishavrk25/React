import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);
  return (
    <div className='text-black  flex flex-col p-4 text-2xl items-center justify-evenly h-40 shadow-2xl shadow-gray rounded'>
      <p id='para'>You have clicked  {count} times.</p>
      <button id='btn'  className='bg-blue-700 p-2 text-white rounded' onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default Counter
