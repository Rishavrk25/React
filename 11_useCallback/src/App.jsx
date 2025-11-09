import React, { useState, useCallback, memo } from "react";

// ✅ Memoized child to avoid re-render unless props change
const Counter = memo(({ onIncrement }) => {
  console.log("Child rendered");
  return <button onClick={onIncrement}>Increment</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  // ❌ Normal function (will be recreated every render)
  const incrementWithoutCallback = () => {
    setCount(c => c + 1);
  };

  // ✅ Memoized function (same reference unless deps change)
  const incrementWithCallback = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>useCallback Demo</h2>

      <h3>Without useCallback ❌</h3>
      <p>Count: {count}</p>
      <Counter onIncrement={incrementWithoutCallback} />

      <h3>With useCallback ✅</h3>
      <p>Count: {count}</p>
      <Counter onIncrement={incrementWithCallback} />
    </div>
  );
}
