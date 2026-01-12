import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>Counter is {count} </h1>
      <button onClick={setCount(count+1)}>I clicked button</button>
      
        count==1? <h1> Conditon1 </h1>
        count==2? <h1> Conditon2 </h1>
        count==3? <h1> Conditon3 </h1>
      
    </div>
  
  )
}

export default App