import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const PRODUCTS_URL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
  "countries/fetchProducts",
  async () => {
    const response = await axios.get(PRODUCTS_URL);

    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
    error: null,
    status: "idle",
  },
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = action.payload;

      state.value.forEach(product => {
        if (product.id === selectedProduct.id) {
          product.isInCart = true;
          return;
        }
      });
    },
    removeFromCart: (state, action) => {
      const selectedProduct = action.payload;

      state.value.forEach(product => {
        if (product.id === selectedProduct.id) {
          product.isInCart = false;
          return;
        }
      });
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        console.log(action);
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action);
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
        console.log(action.error.message);
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart } = productsSlice.actions;

export default productsSlice.reducer;
