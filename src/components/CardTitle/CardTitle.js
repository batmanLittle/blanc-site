import "./CardTitle.css";

export default function CardTitle({ style, title }) {
  return (
    <section className={"card-title__block" + " " + style}>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
    </section>
  );
}
