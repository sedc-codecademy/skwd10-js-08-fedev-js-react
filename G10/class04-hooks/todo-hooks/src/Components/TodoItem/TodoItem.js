import "./TodoItem.css";
import Button from "../Button/Button";

const TodoItem = props => {
  console.log(props.todo);
  return (
    <li className="TodoItem">
      <span style={{ textDecoration: props.todo.isFinished && "line-through" }}>
        {props.todo.todoText}
      </span>
      <Button
        onButtonClick={() => props.onClickTodo(props.todo.id)}
        buttonText={props.todo.isFinished ? "❌" : "✅"}
      />
    </li>
  );
};

export default TodoItem;
