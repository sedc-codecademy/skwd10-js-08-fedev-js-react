import React from "react";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  const { todos, removeItem } = props;
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} removeItem={removeItem} />
      ))}
    </>
  );
};

export default TodosList;
