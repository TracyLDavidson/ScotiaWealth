import React from "react";
import "./IconButton.scss";

export const IconButton = ({
  iconUrl,
  variant = "default",
  onClick = () => {},
  className = "",
}) => {
  return (
    <div className={`icon-button ${className}`} onClick={onClick}>
      {variant === "small" && (
        <div className="icon-button__small">
          <img src={iconUrl} />
        </div>
      )}
      {variant === "xsmall" && (
        <div className="icon-button__xsmall">
          <img src={iconUrl} />
        </div>
      )}
      {variant === "tiny" && (
        <div className="icon-button__tiny">
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
      {variant === "xlarge" && (
        <div className="icon-button__xlarge">
          <img src={iconUrl} />
        </div>
      )}
    </div>
  );
};
