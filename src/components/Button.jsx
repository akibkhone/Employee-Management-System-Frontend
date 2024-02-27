import React from "react";
import classNames from "classnames"; // A utility to join class names conditionally

const Button = ({ buttonName, clickFunction, color }) => {
  // Define the class names for the button and the span elements
  const buttonClass = classNames(
    "relative z-10 overflow-hidden w-auto p-4 h-10 text-white border-none rounded-md text-sm font-bold cursor-pointer group flex justify-center items-center",
    {
      "bg-red-600 hover:bg-red-800": color === "red", // Use red color for Clear, Cancel, Delete
      "bg-green-600 hover:bg-green-800": color === "green", // Use green color for other buttons
    }
  );

  const spanClass = classNames(
    "absolute w-32 h-28 -top-8 -left-2 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left",
    {
      "bg-white group-hover:duration-500 duration-1000": color === "red", // Use white span for red buttons
      "bg-black group-hover:duration-700 duration-700": color === "green", // Use black span for green buttons
    }
  );

  return (
    <button className={buttonClass} onClick={clickFunction}>
      {buttonName}
      <span className={spanClass}></span>
      <span className={spanClass}></span>
      <span className={spanClass}></span>
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-1.2 left-4 z-10">
        {buttonName}
      </span>
    </button>
  );
};

export default Button;