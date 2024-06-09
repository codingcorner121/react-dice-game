import React, { useState } from "react";
import "../App.css";


function StartGame() {

  let numArr = [1,2,3,4,5,6];


  const [isRulesVisible, setRulesVisibility] = useState(false);

  const [diceNum , setDiceNum] = useState(1)

  const [selectNum, setSelectNum] = useState("");

 const [score, setScore] = useState(0);

 const [error , setError] = useState("");



 

  function diceRoll(){

    if(selectNum===""){
      setError("Please select the number");
      return null;
    }


    let randomDiceNum = Math.floor(Math.random() * 6) + 1;

    setDiceNum(randomDiceNum);
    setSelectNum("");
    

    if(randomDiceNum===selectNum){
      setScore((prev) =>{
        return prev+randomDiceNum;
      })
    } else{

      setScore((prev) =>{
        return prev-randomDiceNum;
      })

    }

    console.log(randomDiceNum);

  }

  function numberHandler(value){
    setError("");
    setSelectNum(value);
  }

  function viewRule() {
    if (isRulesVisible) {
      setRulesVisibility(false);
    } else {
      setRulesVisibility(true);
    }
  }

  function resetScore(){
    setScore(0);
  }
  return (
    <div className="container">
      <div className="score_btn_container">
        <div>
          <h1>{score}</h1>
          <h3>Total Score</h3>
        </div>
        <div>
        <p className="error">{error}</p>
          <div className="btn_box">
            

            {numArr.map((value, i)=>{

              return <button key={i} onClick={()=> {return numberHandler(value)}} className={selectNum===value ? "btn_selected" : "select_button"}>{value}</button>

            })}
            
          </div>
          <h3>Select Number</h3>
        </div>
      </div>
      <div className="game_container">
        <div onClick={diceRoll}>
          <img src={"./images/dice_" + diceNum + ".png"} alt="dice" />
        </div>

        <h4>Click on dice to roll</h4>
        <button onClick={resetScore} className="outline-btn">RESET SCORE</button>
        <button onClick={viewRule}>VIEW RULE</button>
      </div>

      <div
        style={{ display: isRulesVisible ? "block" : "none" }}
        id="rules_box"
        className="rules_div"
      >
        <h3>How to play dice game</h3>
        <p className="rules_para">Select any number</p>
        <p className="rules_para">Click on dice image</p>
        <p className="rules_para">
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p className="rules_para">
          if you get wrong guess then 2 point will be dedcuted
        </p>
      </div>
    </div>
  );
}

export default StartGame;
