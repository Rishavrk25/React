import React from 'react'
import { useState } from 'react'

const FormValidation = () => {

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState();


  const validate = () =>{

    if(!username) return setError("Username required");
    if(!email) return setError("Email required");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)) return setError("Invalid email");
    
    if (password.length < 8) return setError("Password must be at least 8 chars");

    setError("");
    return true;

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validate()){
      console.log("login successfully");
    }
  }

  
  return (
    <div>
      <h1>FormValidation</h1>
      <form onSubmit={handleSubmit}>
        Username: <input type="text" name="username" onChange={(e)=> setUsername(e.target.value)}/>
        Email: <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        Password: <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
        <br/>{error && <span>{error}</span>}<br/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default FormValidation