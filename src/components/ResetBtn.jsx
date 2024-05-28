import React from "react";
import "./ResetBtn.css";
const ResetBtn = ({ onClick }) => {
  return (
    <button className="resetBtn" onClick={onClick}>
      Reset
    </button>
  );
};

export default ResetBtn;
