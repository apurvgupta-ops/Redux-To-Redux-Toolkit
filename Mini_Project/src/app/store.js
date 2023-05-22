import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Redux/productSlice";
// import cartReducer from '../features/cart/cartSlice';
export const store = configureStore({
  reducer: {
    product: productsReducer,
    // cart: cartReducer,
  },
});
