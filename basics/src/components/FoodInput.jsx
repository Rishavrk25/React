import React from 'react'

const FoodInput = ({handleKeyDown}) => {

  return (
    <div>
      <input type="text" className='border outline-none p-2 w-full mb-2 text-2xl rounded border-gray-300' placeholder='enter food here...'
      onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default FoodInput