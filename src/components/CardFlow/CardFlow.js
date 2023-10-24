import "./CardFlow.css";
import iconFlow from "../../image/icon-flow.svg";
import CardTitle from "../CardTitle/CardTitle";
import CardBig from "../CardBig/CardBig";
import Button from "../Button/Button";
import CardSmall from "../CardSmall/CardSmall";

import { forwardRef } from "react";

const CardFlow = forwardRef((props, refBlueBlock) => {
  return (
    <div className="card-flow">
      <CardTitle
        ref={refBlueBlock}
        style={"card-title__blue-color"}
        title={"Разгрузим предпринимателей \n от рутины"}
      />

      <CardBig
        title={"Для этого мы придумали — \n потоки"}
        text={
          "Внутри твоего расчётного счёта есть \n дополнительные «кубышки», которые \n позволяют структурировать деньги"
        }
        image={iconFlow}
        btSecondary={
          <Button text={"Попробовать потоки"} style={"button-primary"} />
        }
        btPrimary={
          <Button
            text={"Подробней"}
            style={"button-secondary button-secondary__gray"}
          />
        }
      />
      <div className="card-flow__small">
        <CardSmall
          title={"Настраивай автоплатежи\n в другие банки"}
          text={"Себе, людям или бизнесу"}
        />
        <CardSmall
          title={"Гибко управляй\n переводами в потоке"}
          text={"Суммой и регулярность"}
        />
      </div>
    </div>
  );
});

export default CardFlow;
