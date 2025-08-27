import React from 'react'

const Container = (props) => {
  return (
    <div className='border p-4 w-50 m-4'>
      {props.children}
    </div>
  )
}

export default Container