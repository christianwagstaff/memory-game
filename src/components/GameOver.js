import React from "react";
import "../styles/GameOver.css";

export default function GameOver(props) {
  return (
    <div className="wrapper">
      <div className="popup gameover">
        <h1>{props.message}</h1>
        <div className="image-container">
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="score-container">
          <div>
            Score: <span>{props.score}</span>
          </div>
        </div>
        <button
          onClick={() => {
            props.playAgain();
          }}
        >
          Play Again?
        </button>
      </div>
    </div>
  );
}
