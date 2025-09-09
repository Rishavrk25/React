import React from "react";
import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {
  
  let [activeItems,setActiveItems]=useState([]);

  const handleBuyButton = (item,e)=>{
    console.log("buy button clicked");
    let newItems=[...activeItems,item];
    setActiveItems(newItems);
  }


  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item key={item} foodItem={item} bought={activeItems.includes(item)}
          handleBuyButton={(e) => handleBuyButton(item,e)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
