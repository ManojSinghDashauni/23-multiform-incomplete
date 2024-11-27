import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/Button";

const ParsonalInfo = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  function onSubmit(e) {
    setName(e.target.value);
    setEmail(e.target.value);
    setPhone(e.target.value);

    console.log(name, email, phone);
  }
  return (
    <div>
      <p className="heading">Parsonal Info</p>
      <p className="paragraph">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={onSubmit} className="flex flex-col relative">
        <label className="label" htmlFor="Name">
          Name
        </label>
        <input
          id="Name"
          value={name}
          type="text"
          placeholder="e.g. Stephen King"
          required
          className="input_text"
        />
        <label className="label" htmlFor="Email">
          Email Address
        </label>
        <input
          id="Email"
          value={email}
          type="email"
          required
          className="input_text"
          placeholder="e.g. stephenking@lorem.com"
        />
        <label className="label" htmlFor="Phone">
          Phone Number
        </label>
        <input
          id="Phone"
          value={phone}
          type="tel"
          required
          className="input_text"
          placeholder="e.g. +1 234 567 890"
        />
        <Link to={"/plan"}>
          <Button
            type="submit"
            onClick={() => onSubmit}
            className="btn-primary btn-position "
          />
        </Link>
      </form>
    </div>
  );
};

export default ParsonalInfo;
