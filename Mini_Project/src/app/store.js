import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Redux/productSlice";
import cartReducer from "../Redux/Cart/cartSlice";
export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
  },
});
