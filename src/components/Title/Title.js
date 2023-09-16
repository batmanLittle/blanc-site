import "./Title.css";

const Title = ({ title, text }) => {
  return (
    <section
      className="title"
      data-scroll-delay="0.2"
      data-scroll
      data-scroll-speed="0.1"
    >
      <h2 className="title-main">{title}</h2>
      <p className="title-text">{text}</p>
    </section>
  );
};

export default Title;
