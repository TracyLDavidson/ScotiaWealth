import React from "react";
import { Button, Stack } from "rsuite";
import { Card } from "../../components/Card/Card";
import { AccountInfoItem } from "../../components/AccountInfoItem/AccountInfoItem";
import "./Home.scss";
import { Header } from "../../components/Header/Header";
import { ButtonUnderlined } from "../../components/Buttons/ButtonUnderlined/ButtonUnderlined";
import { PurpleButton } from "../../components/Buttons/PurpleButton/PurpleButton";
import { IconButton } from "../../components/Buttons/IconButton/IconButton";
import creditCardIcon from "../../assets/images/icons/credit-card.png";
import ScotiaWealthBanner from "../../assets/images/logo/scotia-wealth-banner.png";
import rightChevronIcon from "../../assets/images/icons/right-chevron.svg";

import tagIcon from "../../assets/images/icons/tag.png";

export const Home = () => {
  return (
    <>
      <Header />
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
        <Stack direction="column" spacing={10}>
          <Stack>
            <Card className="home__navigational-item">
              <PurpleButton>NEW</PurpleButton>
              ScotiaWealth
              <IconButton
                className="scotia-wealth-banner"
                iconUrl={ScotiaWealthBanner}
              />
              <IconButton iconUrl={rightChevronIcon} variant="tiny" />
            </Card>
          </Stack>
          <Stack>
            <Card className="home__navigational-item">
              <IconButton iconUrl={creditCardIcon} variant="xsmall" />
              Add new products
              <IconButton iconUrl={rightChevronIcon} variant="tiny" />
            </Card>
          </Stack>
          <Stack>
            <Card className="home__navigational-item">
              <IconButton iconUrl={tagIcon} variant="xsmall" />
              Programs and offers(1)
              <IconButton iconUrl={rightChevronIcon} variant="tiny" />
            </Card>
          </Stack>
        </Stack>
      </div>
    </>
  );
};
