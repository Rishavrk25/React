import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

const App = () => {
  const [todoArr,setTodoArr] = useState([]);

  function handleInput(todoTask,todoDate){
    console.log(todoTask);
    console.log(todoDate);
    if(todoTask !="" && todoDate!=""){
      let newArr = [...todoArr,{
        name: todoTask,
        date: todoDate,
      }];
      setTodoArr(newArr);

    }
    else{
      alert("input is empty");
    }
  }

function handleDelete(item) {
  setTodoArr(todoArr.filter(
    (todo) => !(todo.name === item.name && todo.date === item.date)
  ));
}
 
  return (
    <div className=" w-screen flex justify-center items-center ">
      <div className="border rounded-2xl p-4 border-gray-200 shadow-2xl bg-gradient-to-tr from-black to-gray-300 text-white w-[22rem]  md:w-[40rem] mx-2 lg:w-[60rem]">
        <AppName />
        <div className="grid grid-rows-3 grid-cols-[1fr_1fr_0.5fr] gap-4 p-4 w-full ">
            <AddTodo handleInput={handleInput} />
            <TodoItems arr={todoArr} handleDelete={handleDelete} />
        </div>
        
        <h1 className="text-4xl text-center font-bold">Enjoy Adding Your Tasks :)</h1>
      </div>
    </div>
  );
};

export default App;
