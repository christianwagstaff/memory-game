import React, { useState } from "react";
import Card from "./Card";
import GameOver from "./GameOver";
import "../styles/ImageGrid.css";

export default function ImageGrid(props) {
  const imageList = props.imageList;
  const selectedList = props.selectedList;
  const setSelectedList = props.setSelectedList;

  const [shuffleList, setShuffleList] = useState(shuffleArray(imageList));
  const [restart, setRestart] = useState(false);
  const [winner, setWinner] = useState(false);
  const [message, setMessage] = useState(
    `
    Roar! Roar! 
    Game Over! You have already clicked me!
    `
  );
  const [img, setImg] = useState({
    src: imageList[0].img,
    alt: imageList[0].alt,
  });

  function handleClick(id) {
    const selected = imageList.filter((animal) => animal.id === id)[0];
    if (selectedList.includes(id)) {
      endgame(selected);
    } else {
      const newArr = [...selectedList, id];
      if (newArr.length === imageList.length) {
        winGame(selected);
      }
      setSelectedList(newArr);
      setShuffleList(shuffleArray(shuffleList));
    }
  }

  function endgame(selected) {
    setMessage(displayGameOverMessage(selected.cry));
    setImg({ src: selected.img, alt: selected.alt });
    setRestart(true);
  }

  function winGame(selected) {
    setMessage(displayWinningMessage(selected.cry));
    setImg({ src: selected.img, alt: selected.alt });
    setWinner(true);
  }

  function resetGame() {
    setSelectedList([]);
    setRestart(false);
    setWinner(false);
  }

  function displayGameOverMessage(cry) {
    const message = `${cry}! ${cry}! 
    Game Over! You have already clicked me!`;
    return message;
  }
  function displayWinningMessage(cry) {
    const message = `${cry}! ${cry}! 
    Congratulations! You clicked each of us once!`;
    return message;
  }

  return (
    <div className="image-grid">
      <div className="card-container">
        {[...shuffleList].map((img) => {
          const key = img.id;
          const src = img.img;
          const alt = img.alt;
          const title = img.title;
          return (
            <Card
              key={key}
              src={src}
              alt={alt}
              title={title}
              onClick={() => handleClick(key)}
            />
          );
        })}
      </div>
      {restart ? (
        <GameOver
          src={img.src}
          alt={img.alt}
          message={message}
          playAgain={resetGame}
          score={selectedList.length}
        />
      ) : null}
      {winner ? (
        <GameOver
          src={img.src}
          alt={img.alt}
          message={message}
          playAgain={resetGame}
          score={selectedList.length}
        />
      ) : null}
    </div>
  );
}

function shuffleArray(arr) {
  // Fisher-Yates Shuffle Algorithm for Shuffling an Array
  // We duplicate the array as to not mutate the original
  const copy = arr.slice(0);
  for (let i = copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
