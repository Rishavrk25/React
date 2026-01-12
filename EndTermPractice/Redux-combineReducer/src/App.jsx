import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const name = useSelector((store) => store.user.name);
  const email = useSelector((store) => store.user.email);
  const arr = useSelector((store) => store.cart.arr);

  const dispatch = useDispatch();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [cart, setCart] = useState("");

  return (
    <div>
      <h1>App</h1>
      <h2>name : {name}</h2>
      <h2>email : {email}</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "SET_USER", payload: { name: Name, email: Email } });
        }}
      >
        setuser
      </button>

      <h1>Cart</h1>
      <input type="text" onChange={(e)=>setCart(e.target.value)} />
      <button onClick={()=>dispatch({type:'ADD', payload:{cart : cart}})}>AddToCart</button>
      <h2>My Cart </h2>
      {arr.map((item)=>(
        <div>
        <p>{item}</p>
        <button onClick={()=>dispatch({type:'DELETE',payload:{item:item}})}>Delete</button>
        </div>
        
      ))}
    </div>
  );
};

export default App;
