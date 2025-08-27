import React from "react";
import { MdDelete } from "react-icons/md";
const Item = ( {todoName , todoDate, handleDelete} ) => {
  return (
    <>
      <div>{todoName}</div>
      <div>{todoDate}</div>
      <div >
        <button className="bg-red-400 text-white p-2 rounded-xl w-20 h-10 flex justify-center items-center" onClick={handleDelete}><MdDelete /></button>
      </div>
    </>
  );
};

export default Item;
