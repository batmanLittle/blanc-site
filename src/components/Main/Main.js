import "./Main.css";
import HeroCard from "../HeroCard/HeroCard";
import Title from "../Title/Title";
import CardTariff from "../CardTariff/CardTariff";
import CardFlow from "../CardFlow/CardFlow";
import CardClientServer from "../CardClientServer/CardClientServer";
import CardProduct from "../CardProduct/CardProduct";
import Registration from "../Registration/Registration";
import React from "react";
import { forwardRef } from "react";

const Main = forwardRef((props, refVanishBlock) => {
  const refGreenBlock = React.useRef();
  const refBlueBlock = React.useRef();
  const refLilacBlock = React.useRef();

  // const mergeRefs = (...refs) => {
  //   return (element) => {
  //     for (const ref of refs) {
  //       ref.current = element;
  //     }
  //   };
  // };

  React.useEffect(() => {
    window.addEventListener("scroll", function hideScrollBlock() {
      const feik = refVanishBlock.current.getBoundingClientRect().top;
      const blockGreen = refGreenBlock.current.getBoundingClientRect().top;
      const blockBlue = refBlueBlock.current.getBoundingClientRect().top;
      const blockLilac = refLilacBlock.current.getBoundingClientRect().top;
      if (feik >= blockGreen) {
        props.setScrollGreen(true);
      } else {
        props.setScrollGreen(false);
      }
      // console.log(refBlueBlock);
      // console.log(refGreenBlock);
      if (feik >= blockBlue) {
        props.setScrollBlue(true);
      } else {
        props.setScrollBlue(false);
      }
      // console.log(blockLilac);
      if (feik >= blockLilac) {
        props.setScrollLilac(true);
      } else {
        props.setScrollLilac(false);
      }
    });
  });

  return (
    <main className="main">
      <HeroCard />
      <Title
        text={
          "В котором ценят прозрачность, простоту \n и высокий клиентский сервис"
        }
        title={"Бланк — это банк  \n  для предпринимателей"}
      />

      <CardTariff ref={refGreenBlock} />

      <CardFlow ref={refBlueBlock} />

      <CardClientServer ref={refLilacBlock} />

      <Title
        text={"Чтобы твой бизнес работал на максимум"}
        title={"Так же у нас есть\n все необходимые продукты"}
      />

      <CardProduct />

      <Registration />
    </main>
  );
});

export default Main;
