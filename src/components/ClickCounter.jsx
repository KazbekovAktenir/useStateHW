import React from "react";
import "./ClickCounter.css";
const ClickCounter = ({ count }) => {
  return (
    <div className="clickCounter">
      <h1>Click count: {count}</h1>
    </div>
  );
};

export default ClickCounter;
