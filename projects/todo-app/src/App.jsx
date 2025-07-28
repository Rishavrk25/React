import React from "react";
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  // Renamed the array to avoid conflict with the TodoItems component
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to market",
      dueDate: "4/10/2023",
    },
  ];

  // Initialize todoItems state with the initialTodoItems array
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    // Add the new item to the todoItems state
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    if(itemName && itemDueDate) setTodoItems(newTodoItems);
  };

  const handleDelete=(todoName)=>{
    const newTodoItems=todoItems.filter((item)=> item.name!==todoName);
    setTodoItems(newTodoItems);

  }

  return (
    <>
      <section className="flex flex-col items-center gap-4 w-160 mx-auto">
        <AppName />
        <Addtodo handleNewItem={handleNewItem} />
        {todoItems.length===0 && <WelcomeMsg/>}
        <TodoItems todoItems={todoItems} handleDelete={handleDelete} />
      </section>
    </>
  );
}

export default App;
