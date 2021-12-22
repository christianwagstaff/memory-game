import React, { useEffect, useState } from "react";
import "../styles/header.css";

export default function Header(props) {
  const [highScore, setHighScore] = useState(0);
  const imageList = props.imageList;
  const selectedList = props.selectedList;

  useEffect(() => {
    setHighScore(Math.max(highScore, selectedList.length))
  }, [highScore, selectedList])

  return (
    <header className="header">
      <h1 className="title">{props.title}</h1>
      <div className="header-bottom">
        <div className="score-card">
          <div className="current-score">
            <h2>
              Current Score: <span>{selectedList.length}</span>
            </h2>
          </div>
          <div className="high-score">
            <h2>
              High Score: <span>{highScore}</span>
            </h2>
          </div>
        </div>
        <div className="cards-left">
          <h2>
            Images Left: <span>{imageList.length - selectedList.length}</span>
          </h2>
        </div>
      </div>
    </header>
  );
}
