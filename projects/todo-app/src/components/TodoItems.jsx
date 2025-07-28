import React from "react";
import TodoItem from "./TodoItem";

//Changed const TodoItems = (todoItems) to const TodoItems = ({ todoItems }). This ensures that todoItems is extracted as an array from the props object.
const TodoItems = ({todoItems,handleDelete}) => {
  return (
    <div className="flex flex-col items-center gap-4 w-160  mx-auto">
      {todoItems.map((item,index) => (
        <TodoItem key={item.id || index}
        todoDate={item.dueDate} todoName={item.name} handleDelete={handleDelete}></TodoItem>
      ))}
    </div>
  )
};

export default TodoItems;
