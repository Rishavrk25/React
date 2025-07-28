import React, { useState } from 'react'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

const App = () => {
  const[isLoggedIn, setLoggedIn]=useState(true);
  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }
  return(
  <div>
    {isLoggedIn && <LogoutBtn/>}
  </div>
  )


  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/>:<LoginBtn/>}
  //   </div>
  // )


  // if(isLoggedIn){
  //   return(
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }
}

export default App
