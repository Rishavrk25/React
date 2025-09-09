import React, { useState } from "react";

export default function ConditionalRenderingDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [status, setStatus] = useState("loading");
  const users = [
    { id: 1, name: "Ravi", age: 22 },
    { id: 2, name: "Anita", age: 25 },
    { id: 3, name: "Karan", age: 20 },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Conditional Rendering Demo</h1>

      {/* 1. Using if/else */}
      {isLoggedIn ? <p>Welcome back 👋</p> : <p>Please log in 🔑</p>}
      <button
        className="px-2 py-1 bg-blue-500 text-white rounded"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        Toggle Login
      </button>

      {/* 2. Using && */}
      {notifications > 0 && <p>You have {notifications} new notifications 🔔</p>}
      <button
        className="px-2 py-1 bg-green-500 text-white rounded"
        onClick={() => setNotifications(notifications + 1)}
      >
        Add Notification
      </button>

      {/* 3. Using switch */}
      <div>
        <p>Status:</p>
        {(() => {
          switch (status) {
            case "loading":
              return <p>Loading... ⏳</p>;
            case "success":
              return <p>✅ Data loaded!</p>;
            case "error":
              return <p>❌ Something went wrong!</p>;
            default:
              return <p>Idle...</p>;
          }
        })()}
        <button
          className="px-2 py-1 bg-purple-500 text-white rounded mr-2"
          onClick={() => setStatus("loading")}
        >
          Loading
        </button>
        <button
          className="px-2 py-1 bg-purple-500 text-white rounded mr-2"
          onClick={() => setStatus("success")}
        >
          Success
        </button>
        <button
          className="px-2 py-1 bg-purple-500 text-white rounded"
          onClick={() => setStatus("error")}
        >
          Error
        </button>
      </div>

      {/* 4. Conditional rendering inside map */}
      <div>
        <h2>Users List:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age} years old{" "}
              {user.age >= 21 ? "(Adult ✅)" : "(Minor ❌)"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
