import React, { useState, useEffect } from "react";
import "./App.css";
import CreateTodo from "./pages/CreateTodo";
import Todos from "./pages/Todos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [createTodo, setCreateTodo] = useState(false);

  const createNewTodo = (value) => {
    setCreateTodo(value);
  };

  const insertNewTodo = async (text, color) => {
    const newTodoID = await fetch("http://localhost:4000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        color,
      }),
    });
    setTodos([...todos, { id: newTodoID, text, color }]);
    toast.success("ToDo creted successfully!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const removeItem = async (id) => {
    await fetch(`http://localhost:4000/remove/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success("ToDo deleted successfully!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  useEffect(() => {
    fetch("http://localhost:4000/all")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }, []);

  return (
    <div className="App">
      {!createTodo ? (
        <Todos
          todos={todos}
          createNewTodo={createNewTodo}
          removeItem={removeItem}
        />
      ) : (
        <CreateTodo
          createNewTodo={createNewTodo}
          insertNewTodo={insertNewTodo}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
