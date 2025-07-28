import React from "react";
import Items from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {

  const handleBuyButton = (item,e)=>{
    console.log("buy button clicked");
    let newItems=[...activeItems,item];
    setActiveItems(newItems);
  }

  let [activeItems,setActiveItems]=useState([]);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <Items key={item} foodItem={item} bought={activeItems.includes(item)}
          handleBuyButton={(e) => handleBuyButton(item,e)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
