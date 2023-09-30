import "./Title.css";

const Title = ({ title, text }) => {
  return (
    <section className="title">
      <h2 className="title-main ">{title}</h2>
      <p className="title-text textLG">{text}</p>
    </section>
  );
};

export default Title;
