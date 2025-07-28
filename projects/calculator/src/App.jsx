import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

const hello = () => {
  const [calVal, setCalVal] = useState("");

  const handleOnClick = (item, e) => {
    // console.log(item);
    console.log(e);
    if (item === "C") setCalVal("");
    else if (item === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newItem = calVal + item;
      setCalVal(newItem);
    }
  };

  return (
    <>
      <main className="border-2 border-gray-300 rounded w-80 p-4 space-y-4 m-4">
        <Display calVal={calVal} />
        <ButtonsContainer handleOnClick={handleOnClick} />
      </main>
    </>
  );
};

export default hello;
