import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const starterTodoData = [
  {
    todoText: "Create store in redux",
    isFinished: false,
    id: uuid(),
  },
  {
    todoText: "Read todos from TodoList",
    isFinished: false,
    id: uuid(),
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: starterTodoData,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        todoText: action.payload,
        isFinished: false,
        id: uuid(),
      };
      state.value.push(newTodo);
    },
    finishTodo: (state, action) => {
      const todoId = action.payload;

      state.value.forEach(todo => {
        if (todo.id === todoId) {
          todo.isFinished = true;
          return;
        }
      });
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;

      state.value = state.value.filter(todo => todo.id !== todoId);
    },
  },
});

export const { addTodo, finishTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
