import React from 'react'
import { useReducer } from 'react'

const Reducer = () => {
  const reducer = (state,action) =>{
    if(action.type==='INC') return state + 1;
    else if(action.type==='DEC') return state - 1;
    return state;
  }
  const [count,dispatch] = useReducer(reducer,0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>{dispatch({type:'INC'})}}>+</button>
      <button onClick={()=>{dispatch({type:'DEC'})}}>-</button>
    </div>
  )
}

export default Reducer