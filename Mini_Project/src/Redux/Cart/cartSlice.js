import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteFromCart, updateInCart } from "./cartApi";
const initialState = {
  carts: [],
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
export const updateCartItems = createAsyncThunk(
  "cart/updateItems",
  async ({ id, change }) => {
    const response = await updateInCart(id, change);
    return response.data;
  }
);
export const deleteCartItems = createAsyncThunk(
  "cart/deleteItems",
  async (id) => {
    await deleteFromCart(id);
    return id;
  }
);

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (callback) => {
    callback
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "idle";
        state.carts = action.payload;
      })
      .addCase(addCartItems.fulfilled, (state, action) => {
        state.status = "idle";
        state.carts.push(action.payload);
      })
      .addCase(updateCartItems.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.carts.findIndex(
          (item) => item.id === action.payload.id
        );
        state.carts.splice(index, 1, action.payload);
      })
      .addCase(deleteCartItems.fulfilled, (state, action) => {
        state.status = "idle";
        // * Find the index of the product to remove.
        // ? we can use filter to delete but filter returns the new array thats why we use splice because it works on original array.
        const index = state.carts.findIndex(
          (item) => item.id === action.payload.id
        );
        state.carts.splice(index, 1);
      });
  },
});

export default cartSlice.reducer;
