import React from "react";
import "./ClickButton.css";
const ClickButton = ({ onClick }) => {
  return (
    <button className="clickBtn" onClick={onClick}>
      Click me!
    </button>
  );
};

export default ClickButton;
