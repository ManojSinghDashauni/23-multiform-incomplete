import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/Button";

import Card from "../components/Card";

const plandata = [
  {
    id: 1,
    svg: "../../public/images/icon-arcade.svg",
    title: "Arcade",
    plan: "$9/mo",
  },
  {
    id: 2,
    svg: "../../public/images/icon-advanced.svg",
    title: "advanced",
    plan: "$12/mo",
  },
  {
    id: 3,
    svg: "../../public/images/icon-pro.svg",
    title: "Pro",
    plan: "$15/mo",
  },
];
const Plan = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  return (
    <div>
      <p className="heading">Select your plan</p>
      <p className="paragraph">
        You have the option of monthly or yearly billing.
      </p>

      <div className="flex gap-3">
        {plandata.map((item, index) => {
          return (
            <div key={index}>
              <Card
                svg={item.svg}
                plan={item.plan}
                title={item.title}
                className={`${selectedCard === index ? "selected" : ""}`}
                click={() => handleCardSelect(index)}
              />
            </div>
          );
        })}
      </div>

      <div>Monthly toggle Yearly</div>

      <div className="flex justify-between mt-[168px]">
        <Link to={"/ParsonalInfo"}>
          <Button type="submit" children="Go Back" className="btn-secondary" />
        </Link>

        <Link to={"/AddOns"}>
          <Button type="button" className="btn-primary" />
        </Link>
      </div>
    </div>
  );
};

export default Plan;
