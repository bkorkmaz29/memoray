import { StyledRulesPage } from "./RulesPage.styled";
import Button from "../Button/Button";

const RulesPage = ({ button }) => {
  return (
    <StyledRulesPage>
      <ul>
        <li>Choose two cards and flipped them</li>
        <li>If cards match, they are cleared</li>
        <li>If cards does not match, then all cards reset</li>
        <li>Game is over when all cards are cleared</li>
        <li>Try to finish the game with minimum number of moves</li>
      </ul>
      <Button onClick={button} text="go back" />
    </StyledRulesPage>
  );
};

export default RulesPage;
