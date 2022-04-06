import { useEffect, useState, useRef } from "react";

import { StyledBoard } from "./Board.styled";
import Card from "../Card/Card";
import Endgame from "../Endgame/Endgame";
import Counter from "../Counter/Counter";

const Board = ({ images, isStarted, game }) => {
  const [cards, setCards] = useState(() => shuffle(images.concat(images)));
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const timeout = useRef(null);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

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
      setOpenCards([]);
      enable();
      return;
    } else {
      reset();

      timeout.current = setTimeout(() => {
        setOpenCards([]);
        enable();
      }, 50);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 200);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    let size = Object.keys(clearedCards).length;
    if (size === 8) {
      setGameOver(true);
    }
  }, [clearedCards, game]);

  const handleCardClick = (index) => {
    setCount(count + 1);

    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      disable();
    } else {
      setOpenCards([...openCards, index]);
    }
  };

  const reset = () => {
    setClearedCards({});
    setOpenCards([]);
    setShouldDisableAllCards(false);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShouldDisableAllCards(false);
    setCount(0);
    setGameOver(false);
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
    <>
      {!gameOver && <Counter count={count} />}
      <StyledBoard>
        {!gameOver &&
          cards.map((card, index) => {
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
            );
          })}
        {gameOver && <Endgame score={count} start={handleRestart} />}
      </StyledBoard>
    </>
  );
};

export default Board;
