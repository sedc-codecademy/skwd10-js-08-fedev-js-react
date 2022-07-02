import "./Button.css";

const Button = props => {
  return (
    <button
      style={props.style}
      className="Button"
      onClick={props.onButtonClick}
      disabled={props.disabled}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
