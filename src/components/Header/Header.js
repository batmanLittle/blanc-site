import "./Header.css";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header">
      <button className="header__button-img"></button>

      <div className="header__nav-menu">
        <Button text={"Открыть счет"} style={"button-secondary button-hide"} />
        <Button
          text={"Регистрация бизнеса"}
          style={"button-secondary button-hide"}
        />
        <Button text={"Личный кабинет"} style={"button-secondary"} />
      </div>
      <button className="header__button-menu"></button>
    </div>
  );
}

export default Header;
