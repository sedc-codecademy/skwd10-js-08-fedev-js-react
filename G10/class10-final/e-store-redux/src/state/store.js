import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import counterReducer from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    counter: counterReducer,
  },
});

export default store;
