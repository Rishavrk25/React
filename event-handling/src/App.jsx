import React from 'react'

const App = () => {
  function handleClick(){
    alert("I am Clicked");
  }
  function handleMouseOver(){
    alert("Para k uper mouse lekar aaye ho");
  }
  function handleInputChange(e){
    // console.log("Input me value change hui hai");
    console.log("Value till now: ",e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Form submit kar dunkya");
  }
  return (
    <div>
      <button onClick={() => alert("Button click hua h")}>
        Click me
      </button>



      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
        <button type="submit">Sumit</button>
      </form> */}


      {/* <span onMouseOver={handleMouseOver}>
        I am a Para
      </span>

      <button onClick={handleClick}>
        Click me
      </button> */}

      {/* <button onClick={()=>{alert("I got Clicked")}}>
        Click me
      </button> */}

    </div>
  )
}

export default App
