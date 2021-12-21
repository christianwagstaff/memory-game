import React from "react";
import "../styles/Card.css";

export default function Card(props) {
  return (
    <div className="card" onClick={() => props.onClick()}>
      <div className="card-image">
        <img src={props.src} alt={props.alt} />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
}
