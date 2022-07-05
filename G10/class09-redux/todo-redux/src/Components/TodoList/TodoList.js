import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
import { useSelector } from "react-redux";

const TodoList = props => {
  const todos = useSelector(state => state.todos.value);

  return (
    <div className="TodoList">
      <h3>Todos List</h3>
      {todos.length <= 0 && <div>No Todos</div>}
      {todos.length > 0 && (
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onClickTodo={props.onClickTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
