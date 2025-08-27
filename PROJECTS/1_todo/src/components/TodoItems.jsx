import React from "react";
import Item from "./Item";
const TodoItems = ({arr, handleDelete}) => {
  return (
    
      <>
      {arr.map((item, idx) => <Item key={item.name + idx} todoName={item.name} todoDate={item.date} handleDelete={() => handleDelete(item)}/> )}
     </>
  );
};
export default TodoItems;
