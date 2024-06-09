import React, { useState } from "react";

import "./App.css";
import Game from "./Components/Game";
import StartGame from "./Components/StartGame";



export default function App() {

  const [isGameStarted, setGameStarted] = useState(false);

  function playGame (){
    setGameStarted((prev) =>{
      return !prev
    })
  }

  return (
    <div className="App">
      {isGameStarted ? <StartGame/> : <Game click={playGame} />}
      
    </div>
  );
}
