import React from "react";
import TodosList from "../components/TodosList";

const Todos = (props) => {
  const { todos, createNewTodo, removeItem } = props;

  return (
    <div>
      <h1 className="item-container">MY TODOS: </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {todos.length === 0 ? (
          <h4>No todos found</h4>
        ) : (
          <TodosList todos={todos} removeItem={removeItem} />
        )}
      </div>
      <button onClick={() => createNewTodo(true)}>Create New Todo</button>
    </div>
  );
};

export default Todos;
