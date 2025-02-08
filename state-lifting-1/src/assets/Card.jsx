import React from 'react'

const Card = (props) => {
  return (
    <div>
        {props.title}
      <input type="text" value={props.name} className='border w-60 p-1' onChange={(e)=>{props.setName(e.target.value)}}/>
    </div>
  )
}

export default Card
