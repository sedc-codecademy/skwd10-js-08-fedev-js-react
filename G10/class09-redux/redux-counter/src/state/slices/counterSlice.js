import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.value += 1;
    },
    decrement: (state, action) => {
      console.log(action);
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      console.log(action);
      state.value -= action.payload;
    },
  },
});

//Redux needs the actions exported to update the state from outside
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
