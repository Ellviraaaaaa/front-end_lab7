import React from "react";
import "./Task2.css";

function GoodsCard({ name, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2>{name}</h2>
      <p>Ціна: {price} грн</p>
    </div>
  );
}

export default GoodsCard;
