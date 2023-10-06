import "./Header.scss";
import logoMini from "../../assets/images/logo/scotia-logo-mini.svg";
import { NavLink } from "react-router-dom";

const Header = ({ text = "Home" }) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to={"/"} className="header__nav-logo-wrapper">
          {text === "home" && (
            <img src={logoMini} alt="logo" className="header__nav-logo" />
          )}

          {text !== "home" && (
            <div className="headerScotiaWealth__nav-back"></div>
          )}
        </NavLink>
        <h1 className="header__nav-title">{text}</h1>
        <button className="header__nav-search"></button>
      </nav>
      {text === "home" && (
        <h2 className="header__greeting">Good afternoon, Daniel</h2>
      )}
    </header>
  );
};

export { Header };
