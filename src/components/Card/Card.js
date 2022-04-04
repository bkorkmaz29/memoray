import { StyledCard } from './Card.styled';
import { useState } from 'react';

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {

  //const [reveal, setReveal] = useState(false);

  const handleClick = () => {
      !isFlipped && !isDisabled && onClick(index);    
  };
  return (
    <StyledCard reveal={isFlipped}
     onClick={handleClick}>
    {isFlipped && !isInactive &&  <div className="front">
      <img src={card.image} alt="crd" />
       </div> }      
     </StyledCard>
  )
}

export default Card