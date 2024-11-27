import React, { useState } from "react";
import { Link } from "react-router";
import BarCard from "../components/BarCard";
import { Button } from "../components/Button";

const Bar = [
  {
    plan: "+$1/mo ",
    title: "Online service",
    description: "Access to multiplayer games ",
  },
  {
    plan: "+$2/mo ",
    title: "Larger storage",
    description: "Extra 1TB of cloud save ",
  },
  {
    plan: "+$2/mo ",
    title: "Customizable Profile ",
    description: " Custom theme on your profile",
  },
];

const AddOns = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  let toggleCheck = active ? "active " : " ";
  return (
    <div>
      <p className="heading">Pick add-ons</p>
      <p className="paragraph">Add-ons help enhance your gaming experience.</p>
      <ul className="select-none">
        {Bar.map((item, index) => {
          return (
            <li key={index}>
              <BarCard
                title={item.title}
                description={item.description}
                plan={item.plan}
                index={index}
                className=""
              />
            </li>
          );
        })}
      </ul>

      <div className="flex justify-between mt-12">
        <Link to={"/Plan"}>
          <Button type="submit" children="Go Back" className="btn-secondary" />
        </Link>

        <Link to={"/Summary"}>
          <Button type="button" className="btn-primary" />
        </Link>
      </div>
    </div>
  );
};

export default AddOns;
