import React, { useState } from "react";

export default function WithoutUseMemo() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // Expensive calculation (runs on every render ❌)
  const expensiveCalculation = () => {
    console.log("Running expensive calculation...");
    for (let i = 0; i < 1000000000; i++) {} // simulate heavy work
    return count * 2;
  };

  const doubleCount = expensiveCalculation();

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black", padding: "20px" }}>
      <h2>Without useMemo</h2>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setDark(d => !d)}>Toggle Theme</button>
    </div>
  );
}
