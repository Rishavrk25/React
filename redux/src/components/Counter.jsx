import React, { useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
  const counter = useSelector(store => store.counter);
  const dispatch = useDispatch();
  const privacyToggle = useSelector(store => store.privacyToggle);
  const inputRef = useRef(null);

  // useEffect(()=>{
  //   console.log(inputRef.current.value);
  // })

  const handleIncrement = ()=>{
    dispatch({type: 'INCREMENT'});
  }
  const handleDecrement = ()=>{
    dispatch({type: 'DECREMENT'});
  }
  const handleAdd =()=>{
    dispatch({type:'ADD', payload: {
      num : inputRef.current.value
    }});
    inputRef.current.value = "";
  }
  const handleSubtract =()=>{
    dispatch({type:'SUBTRACT', payload: {
      num : inputRef.current.value
    }});
    inputRef.current.value = "";
  }
  const handlePrivacyToggle = () =>{
    dispatch({type:'PRIVACYTOGGLE'});
  }

  return (
    <div>
      <h1>Counter</h1>
      {privacyToggle ? <h2>Counter is private</h2> : <h2>Current counter value: {counter}</h2>}
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handlePrivacyToggle}>Privacy Toggle</button>
      <br/>
      <br/>
      <input type="number" ref={inputRef}/>
      <br/>
      <br/>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
    </div>
  )
}

export default Counter