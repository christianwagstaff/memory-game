import React from "react";
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
  { img: Cat, alt: "Bear", title: "Cat", id: 2 },
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
  function handleClick(id) {
    console.log(id);
  }

  return (
    <div className="image-grid">
      <div className="card-container">
        {[...imageList].map((img) => {
          return (
            <Card
              key={img.id}
              src={img.img}
              alt={img.alt}
              title={img.title}
              onClick={() => handleClick(img.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
