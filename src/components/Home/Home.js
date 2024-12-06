import React from "react";
import { Link } from "react-router-dom"; 
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Лабораторна робота №7</h1>
      <p>Оберіть завдання:</p>
      <div className="links">
        <Link to="/Task1" className="link-btn">
          Завдання 1
        </Link>
        <Link to="/Task2" className="link-btn">
          Завдання 2
        </Link>
      </div>
    </div>
  );
}

export default Home;
