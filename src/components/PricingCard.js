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
      <p>
        <span>$ </span>
        {props.amount}
      </p>
      <ul>
        {props.services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>

      <a href="#" className="btn">
        Learn more
      </a>
    </div>
  );
};

export default PricingCard;
