import { useState } from "react";
import Toggle from "./components/Toggle";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initially, no Toggle is active

  return (
    <div className="p-2  gap-4">
      <Toggle index={0} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Toggle index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default App;
