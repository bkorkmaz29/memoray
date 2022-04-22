import { StyledPanel } from "./Panel.styled";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";

import React from 'react'


const Panel = ({ count, onBack, onRestart }) => {
  return (
    <StyledPanel>
      <button className="panel-button" onClick={onBack}>back</button>
      <div className="counter-wrapper"><Counter count={count} /></div>
      <button className="panel-button" onClick={onRestart}>restart</button>
    </StyledPanel>
  );
};

export default Panel;
