import "./SelectionCard.scss";
import ChatIcon from "../../assets/images/icons/chat-icon.svg";
import CalendarIcon from "../../assets/images/icons/calendar-icon.svg";
import PortfolioIcon from "../../assets/images/icons/portfolio-icon.svg";
import { Link } from "react-router-dom";
const SelectionCard = () => {
  return (
    <div className="selectionCard">
      <Link to={"/chat-options"} className="selectionCard__link">
        <div className="selectionCard__container">
          <div className="selectionCard__wrapper">
            <img
              src={ChatIcon}
              alt="chat icon"
              className="selectionCard__chat"
            />
            <div className="selectionCard__notifications">4</div>
          </div>
          <p className="selectionCard__text selectionCard__text--move">Chat</p>
        </div>
      </Link>
      <div className="selectionCard__container">
        <div className="selectionCard__wrapper">
          <img
            src={CalendarIcon}
            alt="calendar icon"
            className="selectionCard__calendar"
          />
        </div>
        <p className="selectionCard__text">Calendar</p>
      </div>
      <div className="selectionCard__container">
        <img
          src={PortfolioIcon}
          alt="portfolio icon"
          className="selectionCard__portfolio"
        />
        <p className="selectionCard__text">Portfolio</p>
      </div>
    </div>
  );
};

export { SelectionCard };
