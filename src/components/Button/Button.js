import "./Button.css";

const Button = ({ text, style, icon }) => {
  return (
    <button className={style}>
      <span>{text}</span>
      <img
        src={icon}
        // className={icon === undefined ? "button-iconnone" : "button-icon"}
      />
    </button>
  );
};

export default Button;
