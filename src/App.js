import Board from "./components/Board/Board"
import Card from "./components/Card/Card"
import { Container } from "./components/Container"
import './App.css';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <Board />  
    </div>
  );
}

export default App;
