import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import User from './components/User';
import Profile from './components/Profile';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="products" element={<Products/>}></Route>
      <Route path="/users/:id" element={<User/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App