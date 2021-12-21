import React, { useState } from "react";
import Card from "./Card";
import "../styles/ImageGrid.css";
import Bear from "../imgs/icons8-bear-100.png";
import Bulldog from "../imgs/icons8-bulldog-100.png";
import Cat from "../imgs/icons8-cat-100.png";
import Cow from "../imgs/icons8-cow-100.png";
import Crab from "../imgs/icons8-crab-100.png";
import Dog from "../imgs/icons8-dog-100.png";
import Jellyfish from "../imgs/icons8-jellyfish-100.png";
import Lamb from "../imgs/icons8-lamb-100.png";
import Owl from "../imgs/icons8-owl-100.png";
import Pig from "../imgs/icons8-pig-100.png";
import Pigeon from "../imgs/icons8-pigeon-100.png";
import Spider from "../imgs/icons8-spider-100.png";

const imageList = [
  { img: Bear, alt: "Bear", title: "Bear", id: 0 },
  { img: Bulldog, alt: "Bulldog", title: "Bulldog", id: 1 },
  { img: Cat, alt: "Cat", title: "Cat", id: 2 },
  { img: Cow, alt: "Cow", title: "Cow", id: 3 },
  { img: Crab, alt: "Crab", title: "Crab", id: 4 },
  { img: Dog, alt: "Dog", title: "Dog", id: 5 },
  { img: Jellyfish, alt: "Jellyfish", title: "Jellyfish", id: 6 },
  { img: Lamb, alt: "Lamb", title: "Lamb", id: 7 },
  { img: Owl, alt: "Owl", title: "Owl", id: 8 },
  { img: Pig, alt: "Pig", title: "Pig", id: 9 },
  { img: Pigeon, alt: "Pigeon", title: "Pigeon", id: 10 },
  { img: Spider, alt: "Spider", title: "Spider", id: 11 },
];

export default function ImageGrid() {
  const [shuffleList, setShuffleList] = useState(shuffleArray(imageList));

  function handleClick(id) {
    const selected = imageList.filter((animal) => animal.id === id);
    console.log(selected);
    setShuffleList(shuffleArray(shuffleList));
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
