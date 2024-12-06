import React from "react";
import GoodsCard from "./GoodsCard";
import "./Task2.css";

function Task2() {
  const goods = [
    {
      name: "Яблуко",
      price: 27.99,
      image: `${process.env.PUBLIC_URL}/images/item1.jpg`,
    },
    {
      name: "Груша",
      price: 29.99,
      image: `${process.env.PUBLIC_URL}/images/item2.jpg`,
    },
    {
      name: "Апельсин",
      price: 19.99,
      image: `${process.env.PUBLIC_URL}/images/item3.jpg`,
    },
    {
      name: "Виноград",
      price: 41.99,
      image: `${process.env.PUBLIC_URL}/images/item4.jpg`,
    },
    {
      name: "Персик",
      price: 56.99,
      image: `${process.env.PUBLIC_URL}/images/item5.jpg`,
    },
    {
      name: "Слива",
      price: 88.99,
      image: `${process.env.PUBLIC_URL}/images/item6.jpg`,
    },
  ];

  return (
    <div className="task2">
      {goods.map((item, index) => (
        <GoodsCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Task2;
