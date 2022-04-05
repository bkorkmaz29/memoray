import { StyledStartButton } from "./Button.styled";

const StartButton = ({ onClick, text }) => {
  return <StyledStartButton onClick={onClick}>{text}</StyledStartButton>;
};

export default StartButton;
