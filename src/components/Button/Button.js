import { StyledButton } from "./Button.styled";

const StartButton = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default StartButton;
