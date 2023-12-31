import { Link } from "react-router-dom";
import homeIcon from "../../assets/images/icons/home.svg";
import moveMoneyIcon from "../../assets/images/icons/move-money.svg";
import adviceIcon from "../../assets/images/icons/advice.svg";
import scenePlusIcon from "../../assets/images/icons/scene-plus.svg";
import hamburger from "../../assets/images/icons/hamburger.svg";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link className="nav__link">
        <div className="nav__link-bar"></div>
        <div className="nav__icon-wrapper-home">
          <img className="nav__icon" src={homeIcon} alt="Home" />
        </div>
        <p className="nav__title nav__title--active">Home</p>
      </Link>
      <Link className="nav__link">
        <div className="nav__icon-wrapper">
          <img className="nav__icon" src={moveMoneyIcon} alt="Move Money" />
        </div>
        <p className="nav__title">Move Money</p>
      </Link>
      <Link className="nav__link">
        <div className="nav__icon-wrapper-advice">
          <img className="nav__icon" src={adviceIcon} alt="Advice" />
        </div>
        <p className="nav__title">Advice&trade;</p>
      </Link>
      <Link className="nav__link">
        <div className="nav__icon-wrapper">
          <img className="nav__icon" src={scenePlusIcon} alt="Scene+" />
        </div>
        <p className="nav__title">Scene+</p>
      </Link>
      <Link className="nav__link">
        <div className="nav__icon-wrapper-more">
          <img className="nav__icon" src={hamburger} alt="More" />
        </div>
        <p className="nav__title">More</p>
      </Link>
    </nav>
  );
};

export { Navigation };
