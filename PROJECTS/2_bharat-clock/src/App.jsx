import React from "react";
import Heading from "./components/Heading";
import Para1 from "./components/Para1";
import Para2 from "./components/Para2";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div>
        <Heading/>
        <Para1/>
        <Para2/>
      </div>
    </div>
  );
};

export default App;
