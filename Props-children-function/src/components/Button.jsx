import React from 'react'

const Button = (props) => {
    return (
        <div>
            {props.children}
            <button onClick={props.handleClick} className='border p-1'>
                {props.text}
            </button>
        </div>
    );
}

export default Button
