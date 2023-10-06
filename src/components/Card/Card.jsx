import React from "react";
import { Panel } from "rsuite";
import "./Card.scss";

export const Card = ({ children, className }) => {
  return (
    <Panel className={`card ${className}`}>
      <div className="card__content">{children}</div>
    </Panel>
  );
};
