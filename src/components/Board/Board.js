import { useEffect, useState } from 'react'

import { StyledBoard } from './Board.styled';
import Card from "../Card/Card"


const Board = () => {

  const [ images, setImages ] = useState();

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
    return array
}

  const createCards = () => {
    const imagesGenerated = images?.concat(...images)
      
    const shuffledArray = shuffleArray(imagesGenerated)
    setImages(shuffledArray)

  }

  
  
  

  return (
    <StyledBoard>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledBoard>
  )
}

export default Board