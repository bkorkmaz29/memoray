import { useState } from 'react';

import { StyledBoard } from './Board.styled';
import Card from "../Card/Card"


const Board = () => {

  const [reveal, setReveal] = useState(false);

  return (
    <StyledBoard>
      <Card reveal={reveal} setReveal={setReveal}/>
      <Card reveal={reveal} setReveal={setReveal}/>
      <Card reveal={reveal} setReveal={setReveal}/>
      <Card reveal={reveal} setReveal={setReveal}/>
      <Card reveal={reveal} setReveal={setReveal}/>
      <Card reveal={reveal} setReveal={setReveal}/>
      <Card reveal={reveal} setReveal={setReveal}/>
      <Card reveal={reveal} setReveal={setReveal}/>
    </StyledBoard>
  )
}

export default Board