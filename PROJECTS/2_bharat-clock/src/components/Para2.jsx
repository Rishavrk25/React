import React from 'react'

const Para2 = () => {
  let time= new Date();
  return (
    <p className="text-2xl">This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
  )
}

export default Para2;