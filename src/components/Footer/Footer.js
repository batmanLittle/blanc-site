import "./Footer.css";
import logo from "../../image/logo.svg";
import Button from "../Button/Button";
import VK from "../../image/VK.svg";
import TG from "../../image/TG.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section">
        <img className="footer__logo" src={logo} alt="логотип" />
        <div className="footer__info">
          <a href="#" className="textMD footer__link">
            Контакты
          </a>
          <a href="#" className="textMD footer__link">
            Правила обслуживания
          </a>
          <a href="#" className="textMD footer__link">
            Акции и предложения
          </a>
          <a href="#" className="textMD footer__link">
            Документы и условия
          </a>
          <a href="#" className="textMD footer__link">
            Реквизиты бланка
          </a>
          <a href="#" className="textMD footer__link">
            Мерч Бланка
          </a>
          <a href="#" className="textMD footer__link">
            Банкоматы
          </a>
          <a href="#" className="textMD footer__link">
            Тарифы
          </a>
          <a href="#" className="textMD footer__link">
            Отчетность
          </a>
          <a href="#" className="textMD footer__link">
            Вакансии
          </a>
          <a href="#" className="textMD  footer__link">
            Карта сайта
          </a>
        </div>
        <div className="footer__contacts">
          <Button icon={VK} style={"button-secondary-icon"} />
          <Button icon={TG} style={"button-secondary-icon"} />
          <Button
            text={"Личный кабинет"}
            style={"button-secondary button-secondary__gray"}
          />
          <Button
            text={"Открыть счет"}
            style={"button-secondary button-secondary__gray"}
          />
          <Button
            text={"Регистрация бизнеса"}
            style={"button-secondary button-secondary__gray"}
          />
        </div>
      </div>
      <div className="footer__license">
        <p className="textMD">
          ООО «Бланк банк», официальный сайт, универсальная лицензия ЦБ РФ №
          2368 от 06.07.2021
        </p>
      </div>
    </footer>
  );
}

export default Footer;
