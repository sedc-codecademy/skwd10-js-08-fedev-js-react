import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      { id: 1, name: "Coca Cola", price: 50 },
      { id: 2, name: "Stobi Flips", price: 20 },
      { id: 3, name: "Sprite", price: 50 },
    ],
    cart: [],
  },
  reducers: {
    updateCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const { updateCart } = productSlice.actions;

export default productSlice.reducer;
