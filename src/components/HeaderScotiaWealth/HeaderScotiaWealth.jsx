import "./HeaderScotiaWealth.scss";

import { NavLink } from "react-router-dom";
import scotiaWealthLogo from "../../assets/images/logo/scotia-wealth-logo.svg";
const HeaderScotiaWealth = () => {
  return (
    <header className="headerScotiaWealth">
      <nav className="headerScotiaWealth__nav">
        <NavLink to={"/"} className="headerScotiaWealth__nav-back-wrapper">
          <div className="headerScotiaWealth__nav-back"></div>
        </NavLink>
        <h1 className="headerScotiaWealth__nav-title">ScotiaWealth</h1>
        <button className="headerScotiaWealth__nav-search"></button>
      </nav>
      <img
        className="headerScotiaWealth__logo"
        src={scotiaWealthLogo}
        alt="scotia wealth logo"
      />
    </header>
  );
};

export { HeaderScotiaWealth };
