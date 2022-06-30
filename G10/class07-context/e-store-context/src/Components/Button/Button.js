import "./Button.css";

const Button = props => {
  return (
    <button
      style={props.style}
      className="Button"
      onClick={props.onButtonClick}
      //Works exactly the same as vanilla html disabled attr.
      disabled={props.isDisabled}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
