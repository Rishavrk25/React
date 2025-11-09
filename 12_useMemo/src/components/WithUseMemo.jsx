import React, { useState, useMemo } from "react";

export default function WithUseMemo() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleCount = useMemo(() => {
    console.log("Running expensive calculation...");
    for (let i = 0; i < 1000000000; i++) {} // simulate heavy work
    return count * 2;
  }, [count]); // Only re-run if count changes ✅

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black", padding: "20px" }}>
      <h2>With useMemo</h2>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setDark(d => !d)}>Toggle Theme</button>
    </div>
  );
}
