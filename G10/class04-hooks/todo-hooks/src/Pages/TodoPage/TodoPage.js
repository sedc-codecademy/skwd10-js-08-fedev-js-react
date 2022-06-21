import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoInput from "../../Components/TodoInput/TodoInput";

import TodoList from "../../Components/TodoList/TodoList";

const starterTodoData = [
  {
    todoText: "Write an example todo",
    isFinished: false,
    id: uuid(),
  },
  {
    todoText: "Create a finished todo",
    isFinished: true,
    id: uuid(),
  },
];

const TodoPage = props => {
  const [todos, setTodos] = useState(starterTodoData);

  //For finishing or deleting a todo
  const onClickTodo = todoId => {
    const foundTodo = todos.find(todo => todo.id === todoId);

    if (foundTodo.isFinished) {
      //Delete todo from list
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== foundTodo.id));
    } else {
      //Finish todo in list
      setTodos(prevTodos => {
        const updatedTodos = prevTodos.map(todo => {
          if (todo.id === foundTodo.id) {
            todo.isFinished = true;
            return todo;
          } else {
            return todo;
          }
        });
        return updatedTodos;
      });
    }
  };

  const onAddTodo = todoText => {
    const newTodo = {
      todoText,
      isFinished: false,
      id: uuid(),
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  console.log("Todo Page Rerendered");

  return (
    <section className="page">
      <div className="page__heading">
        <h2>TODOS</h2>
      </div>
      <div style={{ display: "flex" }}>
        <TodoInput onAddTodo={onAddTodo} />
        <TodoList todos={todos} onClickTodo={onClickTodo} />
      </div>
    </section>
  );
};

export default TodoPage;
