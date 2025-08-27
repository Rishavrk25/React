import React from "react";

const Item = ( {todoName , todoDate, handleDelete} ) => {
  return (
    <>
      <div>{todoName}</div>
      <div>{todoDate}</div>
      <div>
        <button className="bg-red-400 text-white p-2 rounded-xl" onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default Item;
