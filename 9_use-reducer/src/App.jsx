import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center gap-3">
      <h1>Count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        ➕ Increment by 1
      </button>

      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        ➖ Decrement by 1
      </button>

      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        🔼 Increment by 5
      </button>

      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        🔽 Decrement by 5
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>🔄 Reset</button>
    </div>
  );
}
