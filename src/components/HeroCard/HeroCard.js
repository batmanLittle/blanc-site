import "./HeroCard.css";
import React from "react";
import image from "../../image/hero-image.png";
import Button from "../Button/Button";

function HeroCard() {
  return (
    <div
      className="hero-scroll"
      data-scroll
      data-scroll-speed="1"
      data-scroll-delay="0.2"
      // data-scroll-speed="10"
      // data-scroll-delay="0.1"
    >
      <div className="hero-card">
        <div className="hero-card__info">
          <h1 className="hero-card__title">
            Открой расчётный счёт для бизнеса за 0 ₽
          </h1>
          <p className="hero-card__info-text">
            Открытие счета — 0 ₽. Обслуживание — от 0 ₽.
          </p>
        </div>
        <div
          className="hero-card__button"
          data-scroll
          data-scroll-speed="0.5"
          data-scroll-delay="0.05"
        >
          <Button text={"Открыть счёт за 0 ₽"} style={"button-primary"} />
        </div>

        <img src={image} className="hero-card__image" />
      </div>
    </div>
  );
}

export default HeroCard;
