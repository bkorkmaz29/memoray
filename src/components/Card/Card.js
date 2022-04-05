import { StyledCard } from "./Card.styled";
import { useState, useEffect } from "react";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const [className, setClassName] = useState("back");

  useEffect(() => {
    if (isDisabled) {
      setClassName("disabled");
    }
  }, [isDisabled]);

  useEffect(() => {
    if (isFlipped) {
      setClassName("front");
    }
  }, [isFlipped]);

  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };
  return (
    <StyledCard className={className} onClick={handleClick}>
      {isFlipped && !isInactive && <img src={card.image} alt="crd" />}
      {isInactive && <img src={card.image} alt="crd" />}
    </StyledCard>
  );
};

export default Card;
