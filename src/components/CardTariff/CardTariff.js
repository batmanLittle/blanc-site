import "./CardTariff.css";
import CardTitle from "../CardTitle/CardTitle";
import Button from "../Button/Button";
import iconJunior from "../../image/icon-junior.svg";
import iconMiddle from "../../image/icon-middle.svg";
import iconPro from "../../image/icon-pro.svg";

export default function CardTariff() {
  return (
    <section className="card-tariff">
      <CardTitle
        style={"card-title__green-color"}
        title={"У нас самые простые \n и прозрачные тарифы"}
      />
      <ul className="card-tariff__section">
        <li className="card-tariff__option">
          <div className="card-tariff__title">
            <h3 className="card-tariff__title-text">Джуниор</h3>
            <img className="card-tariff__img" src={iconJunior} />
          </div>
          <ul className="card-tariff__text">
            <li className="textMD">
              250 000 ₽ вывод <br />
              на счета физлиц
            </li>
            <li className="textMD">5 платёжек в месяц бесплатно</li>
            <li className="textMD">Снятие в любом банкомате — 3%</li>
          </ul>
          <Button
            text={"0 ₽/месяц"}
            style={
              "button-secondary card-tariff__button card-tariff__button-grey"
            }
          />
        </li>
        <li className="card-tariff__option">
          <div className="card-tariff__title">
            <h3 className="card-tariff__title-text">Мидл</h3>
            <img className="card-tariff__img" src={iconMiddle} />
          </div>
          <ul className="card-tariff__text">
            <li className="textMD">
              700 000 ₽ вывод <br />
              на счета физлиц
            </li>
            <li className="textMD">20 платёжек в месяц бесплатно</li>
            <li className="textMD">50 000 ₽ в любом банкомате без %</li>
          </ul>
          <Button
            text={"1 000 ₽/месяц"}
            style={
              "button-secondary card-tariff__button card-tariff__button-grey"
            }
          />
        </li>
        <li className="card-tariff__option">
          <div className="card-tariff__title">
            <h3 className="card-tariff__title-text">Профи</h3>
            <img className="card-tariff__img" src={iconPro} />
          </div>
          <ul className="card-tariff__text">
            <li className="textMD">
              1 500 000 ₽ вывод <br />
              на счета физлиц
            </li>
            <li className="textMD">∞ платёжек в месяц бесплатно</li>
            <li className="textMD">300 000 ₽ в любом банкомате без %</li>
          </ul>
          <Button
            text={"5 000 ₽/месяц"}
            style={"button-primary card-tariff__button"}
          />
        </li>
      </ul>
      <div className="card-tariff__comparison">
        <p className="card-tariff__comparison-text">
          Хочу сравнить тарифы между собой
        </p>
        <button className="card-tariff__comparison-button"></button>
      </div>
    </section>
  );
}
