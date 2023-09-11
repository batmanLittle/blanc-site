import "./HeroCard.css";
import React from "react";
import image from "../../image/hero-image.png";

function HeroCard() {
  return (
    <div
      className="hero-scroll"
      data-scroll-section
      data-scroll-speed="6"
      data-scroll-delay="0.03"
    >
      <div className="hero-card">
        <div className="hero-card__info">
          <h1 className="hero-card__title">
            Открой расчётный счёт для бизнеса за 0 ₽
          </h1>
          <p className="hero-card__info-text">Открытие счета — 0 ₽.</p>
          <p className="hero-card__info-text"> Обслуживание — от 0 ₽.</p>
        </div>
        <img src={image} className="hero-card__image" />
      </div>
    </div>
  );
}

export default HeroCard;
