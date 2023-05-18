import { createAction, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  points: 1,
};

// ? If we use extra reducer then we have to create a action constant.
export const IncrementByAmount = createAction("account/IncrementByAmount");

export const bounsReducerToolkit = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    Increment: (state) => {
      state.points += 1;
    },
  },

  // ? Extra reducer help for api colling and when one reducer is depend on another reducer
  extraReducers: (callback) => {
    callback.addCase(IncrementByAmount, (state, action) => {
      if (action.payload >= 100) {
        state.points++;
      }
    });
  },
});

export const { Increment } = bounsReducerToolkit.actions;
export default bounsReducerToolkit.reducer;

// * Redux toolkit automatically create action cretors and action constants
