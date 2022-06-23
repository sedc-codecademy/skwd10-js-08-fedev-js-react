import React from "react";
import "./todoItem.css";

const TodoItem = (props) => {
  const { todo, removeItem } = props;

  const handleRemoveItem = () => {
    removeItem(todo.id);
  };

  return (
    <div className="item-container">
      <div style={{ marginRight: "100px" }}>
        <h3 style={{ color: todo.color }}>{todo.text}</h3>
      </div>
      <div className="removeButton" onClick={handleRemoveItem}>
        X
      </div>
    </div>
  );
};

export default TodoItem;
