import React from "react";

export default function FruitsList() {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange"];

  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
