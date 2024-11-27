import React from "react";
import { Button } from "../components/Button";
import BarCard from "../components/BarCard";
import { Link } from "react-router";

const Summary = () => {
  return (
    <div>
      <p className="heading">Finishing up</p>
      <p className="paragraph">
        Double-check everything looks OK before confirming.
      </p>

      <div className="flex justify-between mt-12">
        <Link to={"/AddOns"}>
          <Button type="submit" children="Go Back" className="btn-secondary" />
        </Link>

        <Link to={"/ThankYou"}>
          <Button type="button" children="Confirm" className="btn-primary" />
        </Link>
      </div>
    </div>
  );
};

export default Summary;
