import React from "react";
import "../App.css";



function Game(props) {
  

  return (
    <div className="grid_box">
      <div className="img_box">
        <img
          className="dice_image"
          src="./images/dices.png"
          alt="dices"
        />
      </div>
      <div className="content_box">
        <h1 className="heading">DICE GAME</h1>
        <button onClick={props.click}>Play Now </button>
      </div>
    </div>
  );
}

export default Game;
