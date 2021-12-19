import React from "react";
import "./SwitchBtn.css";

const SwitchBtn = () => {
  return (
    <div className="SwitchBtn">
      <p>Annually</p>
      <label className="switch">
        <input type="checkbox"></input>
        <span className="toggle" />
      </label>
      <p>Monthly</p>
    </div>
  );
};

export default SwitchBtn;
