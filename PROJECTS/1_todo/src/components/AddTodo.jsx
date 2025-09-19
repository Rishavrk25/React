import React from "react";
import { useState,useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-item-store";
import { useContext } from "react";

const AddTodo = () => {

  const {handleInput} = useContext(TodoItemsContext);

  // const [todoTask, setTodoTask] = useState("");
  // const [todoDate, setTodoDate] = useState("");

  const todoTaskEle = useRef();
  const todoDateEle = useRef();

  // const handleTask = (e) => {
  //   setTodoTask(e.target.value);
  // };
  // const handleDate = (e) => {
  //   setTodoDate(e.target.value);
  // };
  return (
    <>
      <div>
        <input
          type="text"
          ref={todoTaskEle}
          className="outline-none border-1 p-2 w-[100%] md:w-full"
          // value={todoTask}
          // onChange={handleTask}
        />
      </div>
      <div>
        <input
          type="date"
          ref={todoDateEle}
          className="outline-none border-1 p-2  w-[100%] md:w-full"
          // value={todoDate}
          // onChange={handleDate}
        />
      </div>
      <div>
        <button 
          className="bg-green-400 text-white p-2 rounded-xl sm:w-20 sm:h-10 flex justify-center items-center"
          onClick={() => {
            handleInput(todoTaskEle.current.value, todoDateEle.current.value);
            todoTaskEle.current.value = "";
            todoDateEle.current.value = "";
            // setTodoTask("");
            // setTodoDate("");
          }}
        >
          <IoMdAdd />
        </button>
      </div>
    </>
  );
};

export default AddTodo;
