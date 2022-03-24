import { StyledCard } from './Card.styled';

const Card = ({ reveal, setReveal }) => {

    const isRevealed = reveal ? true : false;

  return (
    <StyledCard revealed={isRevealed} onClick={() => setReveal(!reveal)} />
  )
}

export default Card