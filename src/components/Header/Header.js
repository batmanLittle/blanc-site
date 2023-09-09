import "./Header.css";
import logo from "../../image/icon-header.svg";
import Button from "../buttons/Button";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Логотип" />
      <div className="header__nav-menu">
        <Button text={"Открыть счет"} style={"button-secondary"} />
        <Button text={"Регистрация бизнеса"} style={"button-secondary"} />
        <Button
          text={"Личный кабинет"}
          style={"button-secondary"}
          icon={logo}
        />
      </div>
      <div className="header__button-menu"></div>
    </div>
  );
}

export default Header;
