import React from 'react'

const Display = ({calVal}) => {
  return (
    <>
      <input type="text" readOnly 
      value={calVal}
      className="w-full border-2 outline-none text-5xl border-gray-300 rounded p-1" />
      
    </>
  )
}

export default Display