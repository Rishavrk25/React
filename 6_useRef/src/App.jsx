import React from "react";
import { useRef } from "react";

const App = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus(); // directly access DOM node
    inputRef.current.style.backgroundColor="yellow";
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default App;
