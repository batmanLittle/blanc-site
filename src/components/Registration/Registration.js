import "./Registration.css";
import Title from "../Title/Title";

const Registration = () => {
  return (
    <section className="registration">
      <Title
        title={"Стань клиентом\n Бланка за пару минут"}
        text={"Реквизиты счёта будет уже через 5 минут"}
      />
      <form className="registration__form">
        <div className="registration__input-block">
          <p className="textMD textMD__color-gray">Твой номер телефона</p>

          <input
            className="registration__input"
            type="text"
            value={"+7"}
            disabled={true}
          ></input>
          <span className="registration__input-placeholder">
            +7 000 000-00-00
          </span>
        </div>
        <div className="registration__button-block">
          <p className="textSM registration__button-text">
            Оставляя заявку на открытие счёта, я принимаю условия передачи
            информации
          </p>
          <button className="registration__button">Открыть счёт</button>
        </div>
      </form>
    </section>
  );
};

export default Registration;
