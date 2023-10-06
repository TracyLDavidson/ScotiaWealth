import "./NewSelectionCard.scss";
import ChatIcon from "../../assets/images/icons/chat-icon.svg";
import CalendarIcon from "../../assets/images/icons/calendar-icon.svg";
import PortfolioIcon from "../../assets/images/icons/portfolio-icon.svg";
import { Link } from "react-router-dom";
const NewSelectionCard = () => {
  return (
    <div className="newSelectionCard">
      <Link to={"/chat"} className="newSelectionCard__link">
        <div className="newSelectionCard__container">
          <div className="newSelectionCard__wrapper">
            <img
              src={ChatIcon}
              alt="chat icon"
              className="newSelectionCard__chat"
            />
            <div className="newSelectionCard__notifications">3</div>
          </div>
          <p className="newSelectionCard__text newSelectionCard__text--move">Chat</p>
        </div>
      </Link>
      <div className="newSelectionCard__container">
        <div className="newSelectionCard__wrapper">
          <img
            src={CalendarIcon}
            alt="calendar icon"
            className="newSelectionCard__calendar"
          />
        </div>
        <p className="newSelectionCard__text">Calendar</p>
      </div>
      <div className="newSelectionCard__container">
        <img
          src={PortfolioIcon}
          alt="portfolio icon"
          className="newSelectionCard__portfolio"
        />
        <p className="newSelectionCard__text">Portfolio</p>
      </div>
    </div>
  );
};

export { NewSelectionCard };
