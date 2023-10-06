import React from "react";
import "./PurpleButton.scss";
import { Button } from "rsuite";

export const PurpleButton = ({ children, onClick = () => {} }) => {
  return (
    <div className="purple-button" onClick={onClick}>
      <Button>{children}</Button>
    </div>
  );
};
