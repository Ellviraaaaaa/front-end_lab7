import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSport: true,
      toggleCooking: true,
    };
  }

  handleSportClick = () => {
    const sportElement = document.querySelector(".hobby-sport");
    if (this.state.toggleSport) {
      sportElement.style.backgroundColor = "#FFFACD"; 
      sportElement.style.color = "#FFD700"; 
    } else {
      sportElement.style.backgroundColor = "#FFCCCB"; 
      sportElement.style.color = "#FF0500"; 
    }
    this.setState((prevState) => ({
      toggleSport: !prevState.toggleSport,
    }));
  };

  handleCookingClick = () => {
    const cookingElement = document.querySelector(".hobby-cooking");
    if (this.state.toggleCooking) {
      cookingElement.style.backgroundColor = "#FFFACD"; 
      cookingElement.style.color = "#FFD700"; 
    } else {
      cookingElement.style.backgroundColor = "#FFCCCB"; 
      cookingElement.style.color = "#FF0500"; 
    }
    this.setState((prevState) => ({
      toggleCooking: !prevState.toggleCooking,
    }));
  };

  render() {
    return (
      <div>
        <p>Дата народження: 04.04.2005 Місце народження: м.Полтава, Україна</p>
        <p id="education-line" style={{ cursor: "pointer" }}>
          Освіта: ПЗШ № 11, м.Полтава; Наразі навчаюсь в НТУУ "КПІ", факультет
          ФІОТ, спеціальність 126 "Інформаційні системи та технології"
        </p>

        <h3 className="hobby-line">Хобі:</h3>
        <ul>
          <li>Вишивання бісером</li>
          <li
            className="hobby-sport"
            onClick={this.handleSportClick}
            style={{ cursor: "pointer" }}
          >
            Спорт
          </li>
          <li
            className="hobby-cooking"
            onClick={this.handleCookingClick}
            style={{ cursor: "pointer" }}
          >
            Кулінарія
          </li>
        </ul>

        <h3>Улюблені фільми:</h3>
        <ol>
          <li>"Ігри, у які грають люди", Ерік Берн</li>
          <li>"Сім чоловіків Евелін Г'юґо", Тейлор Дженкінс Рід</li>
          <li>"Місто дівчат", Елізабет Ґілберт</li>
          <li>"День, що навчив мене жити", Лоран Гунель</li>
        </ol>

        <p>
          Яре́мче (до 2006 — Яремча) — місто в Україні, центр Яремчанської
          міської громади Надвірнянського району Івано-Франківської області.
          Розміщене на річці Прут, на автошляху Івано-Франківськ — Рахів —
          Ужгород. Залізниця зв'язує місто з обласним центром, Тернополем,
          Києвом, Чернівцями та Львовом. Яремче — кліматичний курорт і центр
          «зеленого» туризму Прикарпаття та цілої Гуцульщини. За 35 км дорогою
          розташований гірськолижний курорт Буковель (село Поляниця).
        </p>
      </div>
    );
  }
}

export default Content;
