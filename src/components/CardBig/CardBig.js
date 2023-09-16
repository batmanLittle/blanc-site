import "./CardBig.css";

function CardBig({ image, title, text, btSecondary, btPrimary }) {
  return (
    <div className="card-big">
      <div className="card-big__text">
        <h3>{title}</h3>
        <p className="textMD">{text}</p>
      </div>
      <img className="card-big__img" src={image} />
      <div className="card-big__button">
        {btSecondary} {btPrimary}
      </div>
    </div>
  );
}

export default CardBig;
