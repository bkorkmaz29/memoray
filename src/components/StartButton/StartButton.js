import { StyledStartButton } from './StartButton.styled';

const StartButton = ({isStarted}) => {

    const startGame = () => {

        isStarted(true)

    }

  return (
    <StyledStartButton onClick={startGame}>Start</StyledStartButton >
  )
}

export default StartButton