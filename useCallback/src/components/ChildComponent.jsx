import React from 'react'
const ChildComponent = React.memo(
    (props) => {
        console.log("Child component got rendered again");
      return (
        <div>
          <button onClick={props.handleClick}>
            {props.buttonName}
          </button>
        </div>
      )
    }
)
export default ChildComponent

// React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nhi toh re-render nhi hoga

// if u r sending a function , then react.memo wont be able to save u from re-rendering
