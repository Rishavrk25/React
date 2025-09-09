import React from "react";
// import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  // let { foodItem }=props;

  // const handleBuyButtonClicked = (e) =>{
  //   console.log(e);
  //   console.log(`${foodItem} being bought`)
  // };

  return (
    <div>
      {/* <li> {props.foodItem}  </li> */}
      {/* <li className={`${styles['kg-item']}`}> {foodItem}  </li> */}
      <li
        className={`border p-2 border-gray-300 mb-1 flex justify-between px-4 ${
          bought ? "bg-red-300" : ""
        }`}
      >
        <span>{foodItem} </span>
        <button
          className="border border-gray-300 bg-gray-200 p-1 rounded"
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    </div>
  );
};

export default Item;
