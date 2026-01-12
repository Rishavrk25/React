import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div className="m-4">
      <input
        type="text"
        className="border p-1"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p className="mt-4 text-lg">
        {text === "" ? "Paragraph will change here..." : text}
      </p>
    </div>
  );
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [text, setText] = useState("");

//   return (
//     <form className="m-4">
//       <input
//         type="text"
//         className="border p-1"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       {text.trim() !== "" && (
//         <button className="border ml-2 p-1">Submit</button>
//       )}
//     </form>
//   );
// };

// export default App;

// // Todo list
// import React, { useState } from "react";

// const App = () => {
//   const [input, setInput] = useState("");
//   const [task, setTask] = useState([]);

//   return (
//     <div className="m-4 border w-100 p-4">
//       <h1 className="text-2xl ">Todo List</h1>
//       <div className="flex justify-between">
//         <input
//           type="text"
//           className="border w-full m-2"
//           value={input}
//           onChange={(e) => {
//             setInput(e.target.value);
//           }}
//         />
//         <button
//           className="border m-2 p-1"
//           onClick={() => {
//             setTask((prev) => [...prev, input]);
//             setInput("");
//           }}
//         >
//           Add
//         </button>
//       </div>

//       <div>
//         <ul className="m-2">
//           {task.map((t, idx) => (
//             <li key={idx} className="flex justify-between my-2 ">
//               <p>{t}</p>
//               <button
//                 className="border p-1"
//                 onClick={() => {
//                   setTask(task.filter((i) => i !== t));
//                 }}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react'
// import Welcome from './components/Welcome';
// const App = () => {
//   const [visibility,setVisibility] = useState('show');
//   return (
//     <div>
//       <h1>Toggle visibility</h1>
//       <button className='border' onClick={()=>setVisibility(prev => prev==='show'?'hide':'show')} >
//         {visibility==='show'?'hide':'show'}
//         </button>
//       {visibility==='show' && <Welcome/>}
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const[lang,setlang] = useState('english');
//   return (
//     <div>
//       <h1>English , Hindi</h1>
//       <h1>You are viewing this page in {lang}</h1>
//       <button className='border p-1' onClick={()=>{setlang(prev => prev==='english'?'hindi':'english')}}>Switch to {lang ==='english'?'hindi':'english'}</button>
//     </div>
//   )
// }

// export default App;

// // Light Mode dark Mode
// import React, { useState } from "react";
// const App = () => {
//   const [theme, setTheme] = useState("light");
//   return (
//     <div className={theme === "dark" ? "bg-black text-white h-screen" : ""}>
//       <h1 className="text-2xl">Light and Dark Mode</h1>
//       <h1 className="text-2xl">Toggle dark and light mode</h1>
//       <button
//         className="border-2"
//         onClick={() => {
//           setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//         }}
//       >
//         switch to {theme === "light" ? "dark" : "light"} mode
//       </button>
//       <br></br>
//     </div>
//   );
// };
// export default App;

// import React, { useEffect } from "react";
// import Counter from "./components/Counter";
// import { UserProvider } from "./context/UserContext";
// import Profile from "./components/Profile";

// const App = () => {

//   return (
//     <UserProvider>
//       <div className="bg-blue-400">App</div>
//       <Counter />
//       <Profile></Profile>
//     </UserProvider>

//   );
// };

// export default App;

// import { useRef } from "react";
// function App() {
//   const inputRef = useRef(null);
//   const focusInput = () => {
//     inputRef.current.focus();   // accessing DOM node
//   };
//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Enter name" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }
// export default App;

// import { useEffect, useRef, useState } from "react";
// function App() {
//   const [value, setValue] = useState("");
//   const prevValue = useRef("");

//   useEffect(() => {
//     prevValue.current = value;  // store old value
//   }, [value]);

//   return (
//     <>
//       <input className="border-2" value={value} onChange={(e) => setValue(e.target.value)} />
//       <p>Current: {value}</p>
//       <p>Previous: {prevValue.current}</p>
//     </>
//   );
// }

// export default App;
