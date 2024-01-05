import React from "react";
import { FaCheck } from "react-icons/fa";

const CheckBox = ({ isComplete }) => {
  return (
    <>
      <div className={`checkbox ${isComplete ? "checked" : ""}`}>
        <input type="checkbox" />
        <span className="checkmark">
          <FaCheck className="icon" />
        </span>
      </div>
    </>
  );
};

export default CheckBox;
