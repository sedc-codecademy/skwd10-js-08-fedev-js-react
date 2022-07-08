import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { loggedUser: null },
  reducers: {
    authenticate(state, action) {
      console.log(action);
      // DONT DO THIS IN PRACTISE, IT IS JUST FOR DEMO PURPOSES
      switch (action.payload.type) {
        case "LOGIN":
          state.loggedUser = action.payload.user;
          break;
        case "LOGOUT":
          state.loggedUser = null;
          break;
        default:
          break;
      }
    },
  },
});

export const { authenticate } = userSlice.actions;

export default userSlice.reducer;
