import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const User = () => {
  const {id} = useParams();
  const [user,setUser] =useState();
  useEffect(()=>{
    fetch(`https://dummyjson.com/users/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      setUser(res.firstName);
    },[])
  })
  return (
    <div>
      <h1>User</h1>
      <h3>Id: {id}</h3>
      <h3>Name: {user}</h3>
    </div>
  )
}

export default User