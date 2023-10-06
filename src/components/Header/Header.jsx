import "./Header.scss";
import logoMini from "../../assets/images/logo/scotia-logo-mini.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to={"/"} className="header__nav-logo-wrapper">
          <img src={logoMini} alt="logo" className="header__nav-logo" />
        </NavLink>
        <h1 className="header__nav-title">Home</h1>
        <button className="header__nav-search"></button>
      </nav>

      <h2 className="header__greeting">Good afternoon, Daniel</h2>
    </header>
  );
};

export { Header };
