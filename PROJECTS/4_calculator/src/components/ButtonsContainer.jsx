import React from "react";

const ButtonsContainer = ({ handleOnClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className="flex gap-4 flex-wrap justify-center">
        {buttonNames.map((item) => (
          <button
            key={item}
            onClick={(e) => handleOnClick(item, e)}
            className="w-15 h-15 border-2 border-gray-300 bg-gray-200 rounded font-semibold text-2xl"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
