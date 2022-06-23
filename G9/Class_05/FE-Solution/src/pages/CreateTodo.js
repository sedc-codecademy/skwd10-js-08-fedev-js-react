import React, { useState } from "react";

const CreateTodo = (props) => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const { createNewTodo, insertNewTodo } = props;
  const createTodo = async (e) => {
    e.preventDefault();
    await insertNewTodo(text, color);
    createNewTodo(false);
  };
  return (
    <div>
      <h1>Create New Todo</h1>
      <form onSubmit={createTodo}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="color">Color</label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Create Todo</button>
      </form>
      <button onClick={() => createNewTodo(false)}>Go Back...</button>
    </div>
  );
};

export default CreateTodo;
