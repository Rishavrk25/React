import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';
// step1: create Context
const UserContext = createContext();
// step2: wrap all the child inside a provider
// step3: pass value
//step4: consumer k ander aake consume karlo


const ThemeContext = createContext();

const App = () => {
  const [user, setUser] = useState({ name: "Love" });
  const [theme, setTheme] = useState('light');

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id='container' className='h-[200px] w-[200px] border flex flex-col justify-center items-center bg-amber-100' style={{ backgroundColor: theme === 'light' ? 'beige' : 'black' }}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>





    // <>
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </>
  )
}

export default App
export {UserContext}
export { ThemeContext }