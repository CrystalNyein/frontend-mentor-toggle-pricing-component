import logo from "./logo.svg";
import "./App.css";
import SwitchBtn from "./components/SwitchBtn";
import PricingCard from "./components/PricingCard";
import { pricingPlan } from "./pricingPlan";
import { useState } from "react";

const App = () => {
  const [monthly, setMonthly] = useState(true);
  return (
    <main className="App">
      <h1>Our Pricing</h1>
      <SwitchBtn setMonthly={setMonthly} monthly={monthly} />
      <div className="pricing-component">
        <PricingCard
          plan={pricingPlan[0].plan}
          amount={
            monthly
              ? pricingPlan[0].amount
              : (pricingPlan[0].amount * 10 + 0.09).toFixed(2)
          }
          services={pricingPlan[0].services}
        />
        <PricingCard
          plan={pricingPlan[1].plan}
          amount={
            monthly
              ? pricingPlan[1].amount
              : (pricingPlan[1].amount * 10 + 0.09).toFixed(2)
          }
          services={pricingPlan[1].services}
        />
        <PricingCard
          plan={pricingPlan[2].plan}
          amount={
            monthly
              ? pricingPlan[2].amount
              : (pricingPlan[2].amount * 10 + 0.09).toFixed(2)
          }
          services={pricingPlan[2].services}
        />
      </div>
    </main>
  );
};

export default App;
