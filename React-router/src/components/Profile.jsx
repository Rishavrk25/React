import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {
  const {state} = useLocation();
  return (
    <div>
      <h1>Profile</h1>
      <h2>{state.name}</h2>
      <h2>{state.age}</h2>
    </div>
  )
}

export default Profile