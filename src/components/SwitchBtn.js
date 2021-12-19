import React from "react";
import "./SwitchBtn.css";

const SwitchBtn = (props) => {
  return (
    <div className="SwitchBtn">
      <p>Annually</p>
      <label className="switch">
        <input
          type="checkbox"
          checked={props.monthly}
          onClick={() => props.setMonthly(!props.monthly)}
        ></input>
        <span className="toggle" />
      </label>
      <p>Monthly</p>
    </div>
  );
};

export default SwitchBtn;
