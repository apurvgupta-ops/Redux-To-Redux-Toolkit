import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  amount: 10,
};

export const accountReducerToolkit = createSlice({
  name: "account",
  initialState,
  reducers: {
    Increment: (state) => {
      state.amount += 1;
    },
    Decrement: (state) => {
      state.amount -= 1;
    },

    IncrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
});

export const { Increment, Decrement, IncrementByAmount } =
  accountReducerToolkit.actions;
export default accountReducerToolkit.reducer;

// * Redux toolkit automatically create action cretors and action constants
