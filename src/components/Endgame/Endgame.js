import { StyledEndgame } from "./Endgame.styled";
import Button from "../Button/Button";

const Endgame = ({ score, start }) => {
  return (
    <StyledEndgame>
      <h1>You've finished in {score} moves.</h1>
      <Button onClick={start} text={"try again"} />
    </StyledEndgame>
  );
};

export default Endgame;
