import React, { useContext } from 'react'
import { UserContext } from '../App'
import { ThemeContext } from '../App'
const ChildC = () => {
    const user=useContext(UserContext);
    const {theme, setTheme}=useContext(ThemeContext);
    function handleClick(){
        if(theme=='light') setTheme('dark');
        else setTheme('light');
    }
 
  return (
    <div> 
      {user.name}
      <button className='border p-1 bg-white' onClick={handleClick}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC
