import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  const [textToShow, setTextToShow] = useState("");
  const [foodItems, setFoodItems] = useState([]);

  const handleKeyDown = (e) => {
    // console.log(e);
    // console.log(e.target.value);
    setTextToShow(e.target.value);
    if(e.key==="Enter"){
      console.log("Enter key is pressed");
      let newFoodItem=e.target.value;
      e.target.value="";
      console.log(newFoodItem);
      let newItems=[...foodItems ,newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-4xl font-bold mb-4">Healthy Food</h1>
        <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ipsum laborum eligendi nobis inventore. Incidunt minima nobis ducimus fugit sapiente.</p>
    </Container> */}
    </>
  );
}

export default App;
