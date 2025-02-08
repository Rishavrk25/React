import React from 'react'
import Card from './assets/Card'
import { useState } from 'react'

const App = () => {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwadunga

  const[name,setName]=useState('');

  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <Card title="Card1: " name={name} setName={setName}/>
      <Card title="Card2: " name={name} setName={setName}/> 
    </div>
  )
}

export default App
