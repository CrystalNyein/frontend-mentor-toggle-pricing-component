import React from "react";
import "./PricingCard.css";

const PricingCard = (props) => {
  return (
    <div
      className={
        props.plan === "Professional" ? "PricingCard recommend" : "PricingCard"
      }
    >
      <h2>{props.plan}</h2>
      <h3>
        <span>$ </span>
        {props.amount}
      </h3>
      <hr />
      {props.services.map((service, index) => (
        <div key={index}>
          <p>{service}</p>
          <hr />
        </div>
      ))}
      <button className="btn">Learn more</button>
    </div>
  );
};

export default PricingCard;
