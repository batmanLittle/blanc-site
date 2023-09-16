import "./CardMiddle.css";

export default function CardMiddle({ title, text, image }) {
  return (
    <section className="card-middle">
      <h3>{title}</h3>
      <p class="textMD">{text}</p>
      <img className="card-middle__image" src={image} />
    </section>
  );
}
