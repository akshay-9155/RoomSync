import React from "react";

const Button = ({
  content = "Click Me",
  color = "bg-gray-200",
  textColor = "text-gray-800",
  onClick,
  className = "",
  rounded = "rounded-xl",
  shadow = "shadow-lg",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${color} ${textColor} ${rounded} ${shadow} 
        p-4 px-6 font-semibold focus:outline-none 
        active:shadow-inner 
        hover:-translate-y-1 hover:shadow-md 
        transition-transform duration-150 ease-in-out
        ${className}`}
      style={{
        boxShadow: `10px 10px 20px #c5c5c5, -10px -10px 20px #ffffff`,
      }}
    >
      {content}
    </button>
  );
};

export default Button;
