import "./TodoItem.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux/es/exports";
import { finishTodo, deleteTodo } from "../../state/slices/todosSlice";

const TodoItem = props => {
  const dispatch = useDispatch();

  const onTodoClick = () => {
    if (props.todo.isFinished) {
      //Dispatch delete action
      dispatch(deleteTodo(props.todo.id));
    } else {
      //Dispatch finsih action
      dispatch(finishTodo(props.todo.id));
    }
  };

  return (
    <li className="TodoItem">
      <span style={{ textDecoration: props.todo.isFinished && "line-through" }}>
        {props.todo.todoText}
      </span>
      <Button
        onButtonClick={() => onTodoClick()}
        buttonText={props.todo.isFinished ? "❌" : "✅"}
      />
    </li>
  );
};

export default TodoItem;
