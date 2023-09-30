import "./HeroCard.css";
import React from "react";
import image from "../../image/hero-image.png";
import Button from "../Button/Button";

function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-card__info">
        <h1 className="hero-card__title">
          Открой расчётный счёт для бизнеса за 0 ₽
        </h1>
        <p className="hero-card__info-text textLG">
          Открытие счета — 0 ₽. Обслуживание — от 0 ₽.
        </p>
      </div>
      <div className="hero-card__button">
        <Button text={"Открыть счёт за 0 ₽"} style={"button-primary"} />
      </div>

      <img src={image} className="hero-card__image" />
    </div>
  );
}

export default HeroCard;
