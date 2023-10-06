import React from "react";
import "./ButtonUnderlined.scss";

export const ButtonUnderlined = ({
  text,
  variant = "default",
  onClick = () => {},
}) => {
  return (
    <div
      className={`button-underlined ${
        variant === "highlight" ? "button-underlined--highlight" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
