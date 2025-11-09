// import React, { useState } from "react";

// // 🔹 Custom Hook
// function useToggle(initialValue = false) {
//   const [value, setValue] = useState(initialValue);
//   const toggle = () => setValue(v => !v);
//   return [value, toggle];
// }

// // 🔹 Component using the custom hook
// export default function App() {
//   const [isVisible, toggleVisibility] = useToggle();
//   const [isDark, toggleTheme] = useToggle(true);

//   return (
//     <div style={{ background: isDark ? "black" : "white", color: isDark ? "white" : "black", padding: "20px" }}>
//       <h2>Custom Hook: useToggle</h2>
//       <button onClick={toggleVisibility}>
//         {isVisible ? "Hide Text" : "Show Text"}
//       </button>
//       {isVisible && <p>This text is toggled!</p>}
//       <hr />
//       <button onClick={toggleTheme}>
//         Switch to {isDark ? "Light" : "Dark"} Mode
//       </button>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";

// 🔹 Custom Hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      });
    return () => { isMounted = false; };
  }, [url]);

  return { data, loading };
}

// 🔹 Component using the custom hook
export default function App() {
  const { data, loading } = useFetch("https://dummyjson.com/products/1");

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Custom Hook: useFetch</h2>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
