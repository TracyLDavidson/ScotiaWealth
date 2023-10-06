import { Header } from "../../components/Header/Header";
import keyboardUpIcon from "../../assets/images/icons/keyboard-up.svg";
import "./Chat.scss";

const Chat = () => {
  return (
    <>
      <section className="chat">
        <div className="chat__bubble chat__bubble--client">
          <p className="chat__message">
            Thanks Steve, can we add option B? Can you set it up for 1000$
            initial position? Send over the docusign. Appreciate it!{" "}
          </p>
        </div>
        <div className="chat__bubble chat__bubble--advisor">
          <p className="chat__message">
            Absolutely. Here it is for your review - sign at the bottom when
            you’re ready.
          </p>
        </div>
        <div className="chat__bubble chat__bubble--document-advisor"></div>
        <div className="chat__bubble chat__bubble--document-client-signed"></div>
        <div className="chat__bubble chat__bubble--client">
          <p className="chat__message">Signed and sealed, thank you!</p>
        </div>
        <div className="chat__bubble chat__bubble--advisor">
          <p className="chat__message">
            My pleasure, I’m going to close out this pin - you can see the new
            account registration on your app.
          </p>
        </div>
        <p className="chat__thread-closed">
          Your advisor has closed this task out. Please return to your chat
          inbox.
        </p>
      </section>
      <section className="message-panel">
        <div className="message-panel__field-wrapper">
          <input
            className="message-panel__field"
            type="text"
            name="message"
            placeholder="Chat with a person"
          />
          <button className="message-panel__button-kyb">
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

export { Chat };
