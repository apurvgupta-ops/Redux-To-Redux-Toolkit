import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  points: 1,
};

export const bounsReducerToolkit = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    Increment: (state) => {
      state.points += 1;
    },
  },
});

export const { Increment } = bounsReducerToolkit.actions;
export default bounsReducerToolkit.reducer;

// * Redux toolkit automatically create action cretors and action constants
