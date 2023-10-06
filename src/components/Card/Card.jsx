import React from "react";
import { Panel } from "rsuite";
import "./Card.scss";

export const Card = ({ children, className, onClick = () => {} }) => {
  return (
    <Panel className={`card ${className}`} onClick={onClick}>
      <div className="card__content">{children}</div>
    </Panel>
  );
};
