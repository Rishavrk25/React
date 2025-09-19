import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-item-store";

const App = () => {
  const [todoArr, setTodoArr] = useState([]);

  const handleInput = (todoTask, todoDate) => {
    console.log(todoTask);
    console.log(todoDate);
    if (todoTask != "" && todoDate != "") {
      // let newArr = [...todoArr,{
      //   name: todoTask,
      //   date: todoDate,
      // }];
      // setTodoArr(newArr);
      setTodoArr((currValue) =>
        [
          ...currValue,
          {
            name: todoTask,
            date: todoDate,
          },
        ]
      );
    } else {
      alert("input is empty");
    }
  };

  function handleDelete(name,date) {
    setTodoArr(
       todoArr.filter(
        (todo) => !(todo.name === name && todo.date ===date)
      )
    );
  }
  
  return (
  <TodoItemsContext.Provider value={{
    todoArr : todoArr,
    handleInput : handleInput,
    handleDelete: handleDelete,
  }}>
    <div className=" w-screen flex justify-center items-center ">
      <div className="border rounded-2xl p-4 border-gray-200 shadow-2xl bg-gradient-to-tr from-black to-gray-300 text-white w-[20rem] sm:w-[40rem] mx-2 lg:w-[60rem]">
        <AppName />
        <div className="grid grid-rows-3 grid-cols-[1fr_1fr_0.5fr] gap-2 sm:gap-4 sm:p-4 w-full ">
          <AddTodo />
          <TodoItems />
        </div>

        <h1 className="text-4xl text-center font-bold">
          Enjoy Adding Your Tasks :)
        </h1>
      </div>
    </div>
    </TodoItemsContext.Provider>
  );
};

export default App;
