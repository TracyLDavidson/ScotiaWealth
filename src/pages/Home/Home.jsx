import React from "react";
import { Button } from "rsuite";
import { Card } from "../../components/Card/Card";
import { ButtonUnderlined } from "../../components/Buttons/ButtonUnderlined/ButtonUnderlined";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Card className="home__card">
        <div className="home__button-group">
          <ButtonUnderlined text="My account" />
          <ButtonUnderlined text="My updates" variant="highlight" />
        </div>
      </Card>
    </div>
  );
};
