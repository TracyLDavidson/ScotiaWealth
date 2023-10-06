import React from "react";
import { Button, Stack } from "rsuite";
import { Card } from "../../components/Card/Card";
import { ButtonUnderlined } from "../../components/Buttons/ButtonUnderlined/ButtonUnderlined";
import { AccountInfoItem } from "../../components/AccountInfoItem/AccountInfoItem";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Card className="home__card">
        <div className="home__button-group">
          <ButtonUnderlined text="My account" />
          <ButtonUnderlined text="My updates" variant="highlight" />
        </div>
        <AccountInfoItem variant="highlight" text="Banking (2)" />
        <AccountInfoItem variant="default" text="Preferred Package (1234)" />
        <AccountInfoItem
          variant="default"
          text="Momentum PLUS Savings (4321)"
        />
        <div className="card_footer">
          <p>Total</p>
          <p>$20,024.89</p>
        </div>
      </Card>
      <Stack direction="column" spacing={20}>
        <Stack>
          <Card>Text</Card>
        </Stack>
        <Stack>
          <Card>Text</Card>
        </Stack>
        <Stack>
          <Card>Text</Card>
        </Stack>
      </Stack>
    </div>
  );
};
