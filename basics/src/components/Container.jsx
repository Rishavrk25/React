import React from 'react'

const Container = (props) => {
  return (
    <div className='border w-100 rounded p-4 m-4'>
      {props.children}
    </div>
  )
}

export default Container