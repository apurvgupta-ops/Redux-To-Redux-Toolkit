// * Redux toolkit automatically create action cretors and action constants
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  amount: 10,
  balance: 0,
};

// ? API Calling
// * we can make saperate file for action also.
export const userAccountBalance = createAsyncThunk(
  "users/accountDetails",
  async (userId, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/accounts/${userId}`
      );
      // console.log(data);
      return data.amount;
    } catch (error) {
      return error.message;
    }
  }
);

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

  extraReducers: (callback) => {
    callback.addCase(userAccountBalance.fulfilled, (state, action) => {
      state.balance = action.payload;
      state.pending = false;
    });
    callback.addCase(userAccountBalance.pending, (state, action) => {
      state.pending = true;
    });
    callback.addCase(userAccountBalance.rejected, (state, action) => {
      state.error = action.error;
      state.pending = false;
    });
  },
});

export const { Increment, Decrement, IncrementByAmount } =
  accountReducerToolkit.actions;
export default accountReducerToolkit.reducer;
