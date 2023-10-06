import React from "react";
import "./IconButton.scss";

export const IconButton = ({
  iconUrl,
  variant = "default",
  onClick = () => {},
}) => {
  return (
    <div className="icon-button" onClick={onClick}>
      {variant === "small" && (
        <div className="icon-button__small">
          <img src={iconUrl} />
        </div>
      )}
      {variant === "medium" && (
        <div className="icon-button__medium">
          <img src={iconUrl} />
        </div>
      )}
      {variant === "default" && (
        <div className="icon-button__default">
          <img src={iconUrl} />
        </div>
      )}
    </div>
  );
};
