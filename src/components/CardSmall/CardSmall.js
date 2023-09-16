import "./CardSmall.css";
import iconSmall from "../../image/icon-small.svg";

export default function CardSmall({ title, text, button }) {
  return (
    <section className="card-small">
      <h4 className="textLG">{title}</h4>
      <p className="textMD">{text}</p>
      <img className="card-small__image" src={iconSmall} />
      <div className="card-small__button">{button}</div>
    </section>
  );
}
