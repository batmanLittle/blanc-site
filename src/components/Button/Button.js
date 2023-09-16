import "./Button.css";

const Button = ({ text, style, icon }) => {
  return (
    <button className={style}>
      <span>{text}</span>
      <img src={icon} />
    </button>
  );
};

export default Button;
