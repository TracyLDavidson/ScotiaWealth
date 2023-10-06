
import { PurpleButton } from "../Buttons/PurpleButton/PurpleButton";
import "./NewOptionBar.scss";
// import { Button } from "rsuite";

const NewOptionBar = () => {
  return (
    <>
      <div className="newOptionBars">
        <p className="newOptionBars__info">Scotia Index Added - RRSP (5432)</p>
        <div className="newOptionBars__button">NEW</div>
      </div>
      <div className="newOptionBars">
        <p className="newOptionBars__info">New Deposit - RRSP (5432)</p>
      </div>
      <div className="newOptionBars">
        <p className="newOptionBars__info">New Fund Added to Account (5432)</p>
      </div>
      <div className="newOptionBars">
        <p className="newOptionBars__info">Funding Document Signed (5432)</p>
      </div>
      <div className="newOptionBars">
        <p className="newOptionBars__info">Funding Document Signed (5432)</p>
      </div>
    </>
  );
};

export { NewOptionBar };
