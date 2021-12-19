import React from "react";

const PricingCard = (props) => {
  return (
    <div className="PricingCard">
      <h2>{props.plan}</h2>
      <h3>{props.amount}</h3>
      <hr />
      {props.services.map((service) => (
        <>
          <p>{service}</p>
          <hr />
        </>
      ))}
      <button className="btn">Learn more</button>
    </div>
  );
};

export default PricingCard;
