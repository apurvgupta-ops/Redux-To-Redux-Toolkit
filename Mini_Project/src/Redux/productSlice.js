import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  products: [],
};

export const productDetails = createAsyncThunk(
  "fetch/products",
  async (userId, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (callback) => {
    callback.addCase(productDetails.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// export const {productDetails} = productSlice.actions
export default productSlice.reducer;
