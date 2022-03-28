import { useEffect, useState, useRef } from 'react'

import { StyledTimer } from './Timer.styled';

const Timer = () => {
  const [counter, setCounter] = useState(10);
  return (
    <StyledTimer>0 : {counter}</StyledTimer>
  )
}

export default Timer