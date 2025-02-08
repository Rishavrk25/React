import Button from './components/Button'
import Cards from './components/Cards'
import React, { useState } from 'react'

const App = () => {

  const [count,setCount]=useState(0);
  
  function handleClick(){
    setCount(count+1);
  }
  
  return (
    <div>
      <Button handleClick={handleClick} text="click me">
        <h1 className='text-4xl'>{count}</h1>
      </Button>



      {/* <Cards name="love babbar">
        -------children----------
        <h1>Lorem ipsum dolor sit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit.</p>
      </Cards>
      <Cards>
        Hello jee
      </Cards> */}
    </div>
  )
}

export default App
