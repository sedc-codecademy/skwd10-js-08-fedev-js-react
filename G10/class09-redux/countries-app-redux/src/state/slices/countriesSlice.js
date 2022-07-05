import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const COUNTRIES_ALL_URL = "https://restcountries.com/v3.1/all";
const COUNTRIES_SEARCH_URL = "https://restcountries.com/v3.1/name/";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async searchValue => {
    if (searchValue) {
      const response = await axios.get(COUNTRIES_SEARCH_URL + searchValue);
      return response.data;
    } else {
      const response = await axios.get(COUNTRIES_ALL_URL);
      return response.data;
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    value: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCountries.pending, (state, action) => {
        console.log(action);
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        console.log(action);
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
