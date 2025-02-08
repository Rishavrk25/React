import React from 'react'
const UserCard = (props) => {
  return (
    <div className='user-container text-white bg-gray-800 h-[300px] w-[240px] text-2xl flex flex-col items-center justify-center gap-4 !p-4 rounded-xl' >
      <p id="user-name">{props.name}</p>
      <div className='border h-[70%] w-[90%]'>
      <img id="user-img" src={props.image} alt="love"className='bg-white h-[100%] w-[100%]'/>
      </div>
      <p id="user-desc" className=' text-center'> {props.desc}</p>
    </div>
  )
}
export default UserCard
