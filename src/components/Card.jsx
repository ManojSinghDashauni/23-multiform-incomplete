import React from "react";

const Card = ({ title, svg, plan, click, className = "" }) => {
  return (
    <div className={`card ${className}`} onClick={click}>
      <img src={svg} alt={title} />
      <div>
        <p className="text">{title}</p>
        <p className="paragrap_1">{plan}</p>
      </div>
    </div>
  );
};

export default Card;
