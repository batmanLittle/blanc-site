import "./Main.css";
import HeroCard from "../HeroCard/HeroCard";
import Title from "../Title/Title";
import CardTariff from "../CardTariff/CardTariff";
import CardFlow from "../CardFlow/CardFlow";
import CardClientServer from "../CardClientServer/CardClientServer";
import CardProduct from "../CardProduct/CardProduct";
import Registration from "../Registration/Registration";

export default function Main() {
  return (
    <main className="main">
      <HeroCard />
      <Title
        text={
          "В котором ценят прозрачность, простоту \n и высокий клиентский сервис"
        }
        title={"Бланк — это банк  \n  для предпринимателей"}
      />

      <CardTariff />

      <CardFlow />

      <CardClientServer />

      <Title
        text={"Чтобы твой бизнес работал на максимум"}
        title={"Так же у нас есть\n все необходимые продукты"}
      />

      <CardProduct />

      <Registration />
    </main>
  );
}
