const StartButton = ({isStarted}) => {

    const startGame = () => {

        isStarted(true)

    }

  return (
    <button onClick={startGame}>Start</button>
  )
}

export default StartButton