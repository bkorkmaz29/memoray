import { useEffect, useState, useRef } from 'react'

import Board from "./components/Board/Board"
import Card from "./components/Card/Card"
import Timer from "./components/Timer/Timer"
import StartButton from "./components/StartButton/StartButton"
import { Container } from "./components/Container"
import './App.css';
import Header from "./components/Header/Header";
//import imageArray from "./constants/data/imageArray";

function App() {
  const [started, setStarted] = useState(false);

  const imageArray = [
    {
      type: "cbgp",
      image: require(`./assets/cbgp.png`)
    },
    {
      type: "cbop",
      image: require(`./assets/cbop.png`)
    },
    {
      type: "cprb",
      image: require(`./assets/cprb.png`)
    },
    {
      type: "crpb",
      image: require(`./assets/crpb.png`)
    },
    {
      type: "dbtp",
      image: require(`./assets/dbtp.png`)
    },
    {
      type: "dbyr",
      image: require(`./assets/dbyr.png`)
    },
    {
      type: "dbpy",
      image: require(`./assets/dpby.png`)
    },
    {
      type: "dybb",
      image: require(`./assets/dybb.png`)
    },

  ];



  return (
    <div className='App'>
      <Header />
      {!started && <StartButton isStarted = {() => setStarted(true)} />}
      { started && <Timer />}
      <Board images={imageArray}/>  
    </div>
  );
}

export default App;
