import React from "react";
import "../styles/header.css";

export default function Header(props) {
  return (
    <header className="header">
      <h1 className="title">Animal Memory Game</h1>
      <div className="header-bottom">
        <div className="score-card">
          <div className="current-score">
            <h2>
              Current Score: <span>0</span>
            </h2>
          </div>
          <div className="high-score">
            <h2>
              High Score: <span>0</span>
            </h2>
          </div>
        </div>
        <div className="cards-left">
          <h2>
            Images Left: <span>0</span>
          </h2>
        </div>
      </div>
    </header>
  );
}
