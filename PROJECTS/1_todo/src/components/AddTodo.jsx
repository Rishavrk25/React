import React from "react";
import { useState } from "react";
const AddTodo = ({handleInput}) => {
  const [todoTask,setTodoTask] = useState("");
  const [todoDate,setTodoDate] = useState("");
  const handleTask = (e) =>{
    setTodoTask(e.target.value);
  }
  const handleDate = (e) =>{
    setTodoDate(e.target.value);
  }
  return (
    <>
      <div>
        <input type="text" className="outline-none border-1 p-2 w-[100%] md:w-full" value={todoTask} onChange={handleTask} />
      </div>
      <div>
        <input type="date" className="outline-none border-1 p-2  w-[100%] md:w-full" value={todoDate} onChange={handleDate} />
      </div>
      <div>
        <button className="bg-green-400 text-white p-2 rounded-xl" onClick={() => {
          handleInput(todoTask,todoDate);
          setTodoTask("");
          setTodoDate("");
        }}
        >Add</button>
      </div>
    </>
  );
};

export default AddTodo;
