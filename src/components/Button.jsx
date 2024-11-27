import React from "react";

export const Button = ({
  children = "Next Step",
  type = "button",
  className = " ",
  ...props
}) => {
  return (
    <button className={`${className}`} type={type} {...props}>
      {children}
    </button>
  );
};
