import React from 'react'
import { CardContainer, CardBody, CardItem } from "../components/Card"
import reactLogo from './assets/react.svg'
import customImage from './assets/image.png'
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CardContainer>
        <CardBody className="border-1 border-gray-200 p-2 bg-gray-200 rounded-2xl">
          <CardItem
            translateZ={50}
            className="text-xl font-bold text-center flex flex-col items-center gap-2">
            <img 
              src={reactLogo} 
              alt="React Logo" 
              className="w-10 h-10 spin-animation"
            />

            3D Card Effect
          </CardItem>
          <CardItem
            translateZ={100}
            className="w-full h-60  rounded-xl flex items-center justify-center">
            <img 
              src={customImage} 
              alt="Custom Image" 
              className="w-full h-full object-cover mt-4 rounded-2xl"
            />
          </CardItem>
          
        </CardBody>
      </CardContainer>
    </div>
  )
}

export default App