import React, { useContext } from "react";
import Item from "./Item";
import { TodoItemsContext } from "../store/todo-item-store";
const TodoItems = () => {
      const {todoArr} = useContext(TodoItemsContext);
  return (
      <>
      {todoArr.map((item, idx) => <Item key={item.name + idx} todoName={item.name} todoDate={item.date} /> )}
     </>
  );
};
export default TodoItems;
