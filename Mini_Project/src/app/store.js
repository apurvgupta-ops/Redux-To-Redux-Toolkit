import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Redux/productSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;
