import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";
const Item = ( {todoName , todoDate} ) => {
  const {handleDelete} = useContext(TodoItemsContext);
  return (
    <>
      <div>{todoName}</div>
      <div>{todoDate}</div>
      <div >
        <button className="bg-red-400 text-white p-2 rounded-xl sm:w-20 sm:h-10 flex justify-center items-center" onClick={() => handleDelete(todoName,todoDate)}><MdDelete /></button>
      </div>
    </>
  );
};

export default Item;
