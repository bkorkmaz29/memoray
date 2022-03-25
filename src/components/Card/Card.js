import { StyledCard } from './Card.styled';
import { useState } from 'react';

const Card = () => {

  const [reveal, setReveal] = useState(false);
 

  return (
    <StyledCard reveal={reveal} onClick={() => setReveal(!reveal)} />
  )
}

export default Card