import React from "react";
import { Panel } from "rsuite";
import "./Card.scss";

export const Card = ({ children }) => {
  return (
    <Panel className="card">
      <div className="card__content">{children}</div>
    </Panel>
  );
};
