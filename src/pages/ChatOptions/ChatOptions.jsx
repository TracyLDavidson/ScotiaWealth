import { Link } from "react-router-dom";
import { HeaderShort } from "../../components/HeaderShort/HeaderShort";
import keyboardUpIcon from "../../assets/images/icons/keyboard-up.svg";
import rightChevron from "../../assets/images/icons/right-chevron.svg";
import "./ChatOptions.scss";

const ChatOptions = () => {
  const keyboardHandler = () => {
    return (
      <div className="keyboard">
        <img src={keyboardUI} alt="Keyboard" />
      </div>
    );
  };
  return (
    <>
      <HeaderShort />
      <section className="chat">
        <div className="chat__bubble chat__bubble--advisor">
          <p className="chat__message">
            Hey Daniel! You mentioned wanting to add a Vanguard fund to your
            RRSP &#40;5432&#41;. Here are some risk-based options I think could
            work for you. &#40;I would recommend B based on our previous
            conversation&#41;.
          </p>
        </div>
        <div className="option">
          <p className="option__title">Option A</p>
          <Link to="/chat" className="option__link">
            <img
              className="option__arrow"
              src={rightChevron}
              alt="Link to Option A"
            />
          </Link>
        </div>
        <div className="option">
          <p className="option__title">Option B</p>
          <Link to="/chat" className="option__link">
            <img
              className="option__arrow"
              src={rightChevron}
              alt="Link to Option A"
            />
          </Link>
        </div>
        <div className="option">
          <p className="option__title">Option C</p>
          <Link to="/chat" className="option__link">
            <img
              className="option__arrow"
              src={rightChevron}
              alt="Link to Option A"
            />
          </Link>
        </div>
      </section>
      <section className="message-panel">
        <div className="message-panel__field-wrapper">
          <input
            className="message-panel__field"
            type="text"
            name="message"
            placeholder="Chat with a person"
          />
          <button
            className="message-panel__button-kyb"
            onClick={keyboardHandler}
          >
            <img
              className="message-panel__kyb"
              src={keyboardUpIcon}
              alt="Show Keyboard"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export { ChatOptions };
