import React from "react";
import logoFull from "../../assets/images/logo/scotia-logo-full.png";
import logoSmall from "../../assets/images/logo/scotia-logo-small.png";
import logoShort from "../../assets/images/logo/scotia-short.png";

import "./Logo.scss";

export const Logo = ({ variant = "short", onClick = () => {} }) => {
  return (
    <div className="logo" onClick={onClick}>
      {variant === "full" && <img src={logoFull} alt="Scotiabank Logo" />}
      {variant === "small" && <img src={logoSmall} alt="Scotiabank Logo" />}
      {variant === "short" && <img src={logoShort} alt="Scotiabank Logo" />}
    </div>
  );
};
