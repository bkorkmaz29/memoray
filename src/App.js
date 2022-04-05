import { useState } from "react";

import { Container } from "./components/Container";
import { ButtonsContainer } from "./components/ButtonsContainer";
import Board from "./components/Board/Board";
import Button from "./components/Button/Button";
import RulesPage from "./components/RulesPage/RulesPage";
import "./App.css";
import Header from "./components/Header/Header";
import imageArray from "./constants/data.js";

function App() {
  const [game, setGame] = useState(false);
  const [rules, setRules] = useState(false);

  return (
    <div className="App">
      <Container>
        {!game && !rules && (
          <>
            <Header />
            <ButtonsContainer>
              <Button text={"start"} onClick={() => setGame(true)} />
              <Button text={"rules"} onClick={() => setRules(!rules)} />
            </ButtonsContainer>
          </>
        )}
        {game && <Board images={imageArray} game={(e) => setGame(e)} />}
        {!game && rules && <RulesPage button={() => setRules(!rules)} />}
      </Container>
    </div>
  );
}

export default App;
