import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Products = () => {

  const [searchParams,setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const name = searchParams.get("name");
  return (
    <div>
      <h1>Products</h1>
      <br/> <h2>{id}, {name}</h2>
      <button onClick={()=>{setSearchParams({ id: 1, name: "Hello" });}}>Set search params</button>
    </div>
  )
}

export default Products