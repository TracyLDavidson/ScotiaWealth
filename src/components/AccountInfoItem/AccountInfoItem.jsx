import React from "react";
import "./AccountInfoItem.scss";

export const AccountInfoItem = ({
  text,
  variant = "default",
  onClick = () => {},
}) => {
  return (
    <div className="account-info-item" onClick={onClick}>
      {variant === "default" && <p className="default">{text}</p>}
      {variant === "highlight" && <p className="highlight">{text}</p>}
    </div>
  );
};
