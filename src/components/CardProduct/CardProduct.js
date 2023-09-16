import "./CardProduct.css";
import iconFlow from "../../image/icon-flow.svg";
import iconButton from "../../image/icon-button.svg";
import CardBig from "../CardBig/CardBig";
import Button from "../Button/Button";
import CardSmall from "../CardSmall/CardSmall";

export default function CardProduct() {
  return (
    <section className="card-product">
      <CardBig
        title={"Даём 5%\n c рекламного оборота  "}
        text={
          "И бонус 10 000 ₽ для запуска рекламы\n на всех доступных платформах"
        }
        image={iconFlow}
        btSecondary={<Button text={"Подключить"} style={"button-primary"} />}
        btPrimary={
          <Button
            text={"Подробней"}
            style={"button-secondary button-secondary__gray"}
          />
        }
      />
      <div className="card-product__small">
        <CardSmall
          title={"Депозиты\n на 6% годовых"}
          text={"Через СБП за 0 Р"}
          button={<Button icon={iconButton} style={"button-secondary-icon"} />}
        />
        <CardSmall
          title={"Куаринг от 0.4 %\n с каждого платежа"}
          text={"Одним засанием с MIR PAY"}
          button={<Button icon={iconButton} style={"button-secondary-icon"} />}
        />
        <CardSmall
          title={"Торговый эквайринг\n от 0.58%"}
          text={"Через СБП за 0 Р"}
          button={<Button icon={iconButton} style={"button-secondary-icon"} />}
        />
        <CardSmall
          title={"Интеграции: Эльба,\n 1С, СБИС"}
          text={"Настраиваются в несколько кликов"}
          button={<Button icon={iconButton} style={"button-secondary-icon"} />}
        />
        <CardSmall
          title={"Интернет эквайринг\n от 0.85%"}
          text={"Через СБП за 0 Р"}
          button={<Button icon={iconButton} style={"button-secondary-icon"} />}
        />
        <CardSmall
          title={"Полность бесплатная\n бухгалтерия "}
          text={"Через СБП за 0 Р"}
          button={<Button icon={iconButton} style={"button-secondary-icon"} />}
        />
      </div>
    </section>
  );
}
