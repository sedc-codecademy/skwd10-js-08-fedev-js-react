import { useState } from "react";
import Button from "../Button/Button";
import "./TodoInput.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../state/slices/todosSlice";

const TodoInput = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrrorMsg] = useState("");

  const onInputSubmit = () => {
    if (inputValue.length < 1) {
      setErrrorMsg("Todo field must not be empty!");
      return;
    }

    // props.onAddTodo(inputValue);
    dispatch(addTodo(inputValue));

    setInputValue("");
    setErrrorMsg("");
  };

  return (
    <div className="Input">
      <h3>Add Todo</h3>
      <div className="Input__controls">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter todo text here"
          onChange={e => setInputValue(e.target.value)}
        />
        <p>
          <small>{errorMsg}</small>
        </p>
      </div>
      <Button
        buttonText="ADD"
        style={{ width: "300px", alignSelf: "center" }}
        onButtonClick={() => onInputSubmit()}
      />
    </div>
  );
};

export default TodoInput;
