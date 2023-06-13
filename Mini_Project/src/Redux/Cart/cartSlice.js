import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./cartApi";
const initialState = {
  cart: [],
  status: "idle",
};

export const fetchCartItems = createAsyncThunk("cart/getItems", async () => {
  const response = await fetchCart();
  return response.data;
});

export const addCartItems = createAsyncThunk("cart/addItems", async (item) => {
  const response = await addToCart(item);
  return response.data;
});
// export const fetchCartItems = createAsyncThunk("cart/getItems", async () => {
//   const response = await fetchCart();
//   return response.data;
// });
// export const fetchCartItems = createAsyncThunk("cart/getItems", async () => {
//   const response = await fetchCart();
//   return response.data;
// });
// export const fetchCartItems = createAsyncThunk("cart/getItems", async () => {
//   const response = await fetchCart();
//   return response.data;
// });

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (callback) => {
    callback
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart = action.payload;
      })
      .addCase(addCartItems.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart.push(action.payload);
      });
  },
});

export default cartSlice.reducer;
