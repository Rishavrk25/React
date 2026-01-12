import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        input: input,
      },
    });
    setInput("");
  };

  function handleDelete(item) {
    dispatch({ type: "DELETE", payload: { item: item } });
  }

  function handleEdit(item) {
    dispatch({
      type: "EDIT",
      payload: {
        oldInput: item,
        newInput: input
      },
    });
    setInput("");
  }

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {data.map((item, idx) => (
        <div key={idx}>
          <input type="text" value={item} readOnly />
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
