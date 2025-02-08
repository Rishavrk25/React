import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Parameter from './components/Parameter';
import Courses from './components/Courses';
import Mock from './components/Mock';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Navbar />
        <Home />
      </div>
  },
  {
    path: "/about",
    element:
      <div>
        <Navbar />
        <About />
      </div>
  },
  {
    path: "/dashboard",
    element:
      <div>
        <Navbar />
        <Dashboard />
      </div>,
      children:[
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'mock-tests',
          element:<Mock/>
        },
        {
          path:'reports',
          element:<Reports/>
        },
        
      ]
  },
  {
    path:"/student/:id",
    element:
    <div>
        <Parameter/>
      </div>

  },
  {
    path:'*',
    element:<NotFound/>
  }
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
