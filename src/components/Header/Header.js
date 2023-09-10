import "./Header.css";
// import logo from "../../image/icon-header.svg";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header">
      <button className="header__button-img">
        {/* <img src={logo} alt="Логотип" /> */}
      </button>

      <div className="header__nav-menu">
        <Button text={"Открыть счет"} style={"button-secondary"} />
        <Button text={"Регистрация бизнеса"} style={"button-secondary"} />
        <Button text={"Личный кабинет"} style={"button-secondary"} />
      </div>
      <button className="header__button-menu"></button>
    </div>
  );
}

export default Header;
