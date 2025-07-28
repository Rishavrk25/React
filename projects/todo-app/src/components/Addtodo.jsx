import { useState } from "react";

function Addtodo({ handleNewItem }) {
  const [todoName,setTodoName]=useState("");
  const [todoDate,setTodoDate]=useState("");

  const handleNameChange=(e)=>{
    // console.log(e.target.value);
    setTodoName(e.target.value);
  }
  const handleDateChange=(e)=>{
    // console.log(e.target.value);
    setTodoDate(e.target.value);
  }

  return (

    <div className="w-full flex justify-around text-2xl">
      <div className="w-50 border ">
        <input
          type="text"
          placeholder="Enter TODO here"
          className="p-1 outline-none"
          onChange={handleNameChange}
          value={todoName}
          
        />
      </div>
      <div className="w-52 border">
        <input type="date"
        onChange={handleDateChange}
        value={todoDate}
        className="p-1 outline-none" />
      </div>
      <div className="w-30 text-center text-xl ">
        <button
          onClick={()=>{
            handleNewItem(todoName,todoDate);
            setTodoName("");
            setTodoDate("");
          }}
          className="bg-green-600 p-1 rounded text-white w-20"
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default Addtodo;
