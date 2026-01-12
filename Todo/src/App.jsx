import React from 'react'
import { useState } from 'react';

const App = () => {
  const [task,setTask] = useState("");
  const [tasks,setTasks] = useState([]);
  return (
    <div>
      <h1>Todo</h1>
      <form>
        <input type="text"   /> 
        <button onClick={(e)=>{
          e.preventDefault();
          console.log(e);
        }}>Add</button>
      </form>

    </div>
  )
}

export default App