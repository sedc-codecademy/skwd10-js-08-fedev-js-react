import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { balance: 100 },
  reducers: {
    setNewBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

export const { setNewBalance } = userSlice.actions;

export default userSlice.reducer;
