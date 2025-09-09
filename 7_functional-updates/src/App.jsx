// import React from 'react'
// import { useState } from 'react';
// function App() {
//   const [count, setCount] = useState(0);

//   const incrementTwice = () => {
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//   };
//   const [form, setForm] = useState({ name: "", age: 0 });

//   setForm((prevForm) => ({
//     ...prevForm,
//     age: prevForm.age + 1,
//   }));
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementTwice}>+2</button>
//     </div>
//   );
// }
// export default App



import React, { useState } from "react";

export default function FormExample() {
  // initial state
  const [form, setForm] = useState({ name: "Rishav", age: 0 });

  // increase age using functional update ✅
  const increaseAge = () => {
    setForm((prevForm) => ({
      ...prevForm,
      age: prevForm.age + 1, // always latest value
    }));
  };

  // increase age without functional update ❌ (can cause bugs)
  const increaseAgeWrong = () => {
    setForm({
      ...form,
      age: form.age + 1, // may use stale value
    });
  };

  return (
    <div className="flex flex-col items-center gap-3 p-5">
      <h1 className="text-xl font-bold">Form State Example</h1>
      <p>
        <strong>Name:</strong> {form.name}
      </p>
      <p>
        <strong>Age:</strong> {form.age}
      </p>

      <button
        onClick={increaseAge}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        ✅ Increase Age (Functional Update)
      </button>

      <button
        onClick={increaseAgeWrong}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        ❌ Increase Age (Non-Functional Update)
      </button>
    </div>
  );
}
