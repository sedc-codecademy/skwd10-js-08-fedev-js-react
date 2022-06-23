const express = require("express");
const { v4: uuid } = require("uuid");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let todos = [
  {
    id: uuid(),
    text: "Learn React",
    color: "red",
  },
];

app.get("/all", (req, res) => {
  res.status(200).json(todos);
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const newTodo = req.body;
  console.log(newTodo);
  const id = uuid();
  todos.push({
    ...newTodo,
    id,
  });
  res.status(201).json({ id });
});

app.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  todos = [...filteredTodos];
  res.status(200).json({ success: true });
});

app.listen(4000);
