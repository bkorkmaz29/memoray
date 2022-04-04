import { useEffect, useState, useRef } from 'react'

import { StyledBoard } from './Board.styled';
import Card from "../Card/Card"


const Board = ( {images, isStarted, game} ) => {

  const [cards, setCards] = useState(
    () => shuffle((images).concat(images)))
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const timeout = useRef(null);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  
  

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const evaluate = () => {
    const [first, second] = openCards;
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards(([]))
      enable();
      return;
    } else {
    handleRestart();
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
      enable();
    }, 500);
  }
  };

  
  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    let size = Object.keys(clearedCards).length;
    if (size === 8) {
      game(false);
    }

   
  }, [clearedCards]);

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      disable();
    } else {
      setOpenCards([...openCards, index]);
    }

  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShouldDisableAllCards(false);
  };

  function shuffle(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };
 

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };
  return (
   
    <StyledBoard>
      {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              onClick={handleCardClick}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
            />
          )
        })}   
    </StyledBoard>
  )
}

export default Board