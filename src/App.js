import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import Bear from "./imgs/icons8-bear-100.png";
import Bulldog from "./imgs/icons8-bulldog-100.png";
import Cat from "./imgs/icons8-cat-100.png";
import Cow from "./imgs/icons8-cow-100.png";
import Crab from "./imgs/icons8-crab-100.png";
import Dog from "./imgs/icons8-dog-100.png";
import Jellyfish from "./imgs/icons8-jellyfish-100.png";
import Lamb from "./imgs/icons8-lamb-100.png";
import Owl from "./imgs/icons8-owl-100.png";
import Pig from "./imgs/icons8-pig-100.png";
import Pigeon from "./imgs/icons8-pigeon-100.png";
import Spider from "./imgs/icons8-spider-100.png";

const imageList = [
  { img: Bear, alt: "Bear", title: "Bear", id: 0, cry: "Roar" },
  { img: Bulldog, alt: "Bulldog", title: "Bulldog", id: 1, cry: "Snort" },
  { img: Cat, alt: "Cat", title: "Cat", id: 2, cry: "Meow" },
  { img: Cow, alt: "Cow", title: "Cow", id: 3, cry: "Moo" },
  { img: Crab, alt: "Crab", title: "Crab", id: 4, cry: "Pinch" },
  { img: Dog, alt: "Dog", title: "Dog", id: 5, cry: "Bark" },
  {
    img: Jellyfish,
    alt: "Jellyfish",
    title: "Jellyfish",
    id: 6,
    cry: "Squish",
  },
  { img: Lamb, alt: "Lamb", title: "Lamb", id: 7, cry: "Baa" },
  { img: Owl, alt: "Owl", title: "Owl", id: 8, cry: "Hoot" },
  { img: Pig, alt: "Pig", title: "Pig", id: 9, cry: "Oink" },
  { img: Pigeon, alt: "Pigeon", title: "Pigeon", id: 10, cry: "Coo" },
  { img: Spider, alt: "Spider", title: "Spider", id: 11, cry: "Eek" },
];

function App() {
  const [selectedList, setSelectedList] = useState([]);

  return (
    <div className="App">
      <Header title="Animal Memory Game" selectedList={selectedList} imageList={imageList} />
      <ImageGrid
        imageList={imageList}
        setSelectedList={setSelectedList}
        selectedList={selectedList}
      />
    </div>
  );
}

export default App;
