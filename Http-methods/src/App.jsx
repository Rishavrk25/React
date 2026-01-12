import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        console.log(res.data.users);
        setData(res.data.users);
      })
    
      .catch((err) => console.log(err));
  }, []); // runs only once on mount

  return (
    <div>
      <h1>App</h1>
      {data.map((item)=>(
        <p key={item.id}>{item.firstName}</p>
      ))}
    </div>
  );
};

export default App;
