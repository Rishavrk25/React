import { useEffect, useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);

  useEffect(() => {
    console.log("Component mounted or updated");
    // renderCount.current += 1;
    setCount(count+1);
  }, [count]);



  return (
    <>
      <p>Count: {count}</p>
      <p>Render Count: {renderCount.current}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
    </>
  );
}
