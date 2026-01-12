import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <Link to="/"> Go to Home</Link><br/>
      <button onClick={()=>navigate("/")}>Go to Home</button><br/>
      <button onClick={()=>navigate(-1)}>back</button><br/>
      <button onClick={()=>navigate(1)}>forward</button>
    </div>
  )
}

export default About