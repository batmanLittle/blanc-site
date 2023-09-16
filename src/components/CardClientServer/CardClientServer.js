import "./CardClientServer.css";
import CardTitle from "../CardTitle/CardTitle";
import CardBig from "../CardBig/CardBig";
import Button from "../Button/Button";
import iconFlow from "../../image/icon-flow.svg";
import CardMiddle from "../CardMiddle/CardMiddle";
import iconСlient from "../../image/icon-clientServer.svg";
import iconСlient2 from "../../image/icon-clientServer2.svg";

export default function CardClientServer() {
  return (
    <section className="card-client-server">
      <CardTitle
        style={"card-title__lilac-color"}
        title={"Ориентированы\n на клиентский сервис"}
      />
      <CardBig
        title={"Живая поддержка\n 24/7 без роботов"}
        text={
          "Только живыми людьми. Которые\n выслушают, помогут и развеселят,\n если грустно"
        }
        image={iconFlow}
        btPrimary={
          <Button
            text={"Открыть счёт"}
            style={"button-secondary button-secondary__gray"}
          />
        }
      />
      <div className="card-client-server__middle">
        <CardMiddle
          title={"Открываем счёт\n за один день"}
          text={
            "Вместо встречи в банке —\n видеозвонок на полчаса\n в удобное время"
          }
          image={iconСlient}
        />
        <CardMiddle
          title={"У нас самый\n лояльный финмон"}
          text={"Не беспокоим и не мешаем\n работать "}
          image={iconСlient2}
        />
      </div>
    </section>
  );
}
