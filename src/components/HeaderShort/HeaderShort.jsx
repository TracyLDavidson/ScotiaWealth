import "./HeaderShort.scss";
import { NavLink } from "react-router-dom";

const HeaderShort = () => {
  return (
    <header className="header-short">
      <nav className="header-short__nav">
        <NavLink to={-1} className="header-short__nav-back-wrapper">
          <div className="header-short__nav-back"></div>
        </NavLink>
        <h1 className="header-short__nav-title">Chat</h1>
      </nav>
    </header>
  );
};

export { HeaderShort };
