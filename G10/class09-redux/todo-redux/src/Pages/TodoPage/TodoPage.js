import TodoInput from "../../Components/TodoInput/TodoInput";
import TodoList from "../../Components/TodoList/TodoList";

const TodoPage = props => {
  return (
    <section className="page">
      <div className="page__heading">
        <h2>TODOS</h2>
      </div>
      <div style={{ display: "flex" }}>
        <TodoInput />
        <TodoList />
      </div>
    </section>
  );
};

export default TodoPage;
