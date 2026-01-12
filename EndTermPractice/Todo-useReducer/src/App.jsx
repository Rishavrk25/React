import React from "react";
import { useReducer } from "react";
import { reducer } from "./reducer";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const [arr, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD", payload: { input: input } });
          setInput("");
        }}
      >
        Add
      </button>
      {arr.map((item, idx) => (
        <div key={idx}>
          <input type="text" value={item} readOnly />
          <button
            onClick={() =>
              dispatch({
                type: "UPDATE",
                payload: { oldInput: item, newInput: input },
              })
            }
          >
            Update
          </button>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE", payload: { item: item } })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
