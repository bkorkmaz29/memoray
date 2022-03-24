import Board from "./components/Board/Board"
import Card from "./components/Card/Card"
import { Container } from "./components/Container"

function App() {
  return (
    <Container>
      <Board>
        <Card />  
      </Board>
    </Container>
  );
}

export default App;
