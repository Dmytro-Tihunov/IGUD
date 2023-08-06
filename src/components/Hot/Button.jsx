import React from "react";
import "./Button.css";

const Button = ({ label, type, handleClick, currentCat }) => {
  return (
    <button
      className={currentCat === type ? 'active component' : 'component'}
      style={{ display: "flex" }}
      onClick={() => handleClick(type)}
    >
      {label}
    </button>
  );
};


export default Button;
