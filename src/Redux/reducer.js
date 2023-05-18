import { createSlice } from "@reduxjs/toolkit";
import * as constant from "./constants";

export const initialState = {
  amount: 90,
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.INC:
      return { account: state.account + 1 };
    case constant.DEC:
      return { account: state.account - 1 };
    case constant.INCBYAMT:
      return { account: state.account + action.payload };
    case constant.USERDATAPENDING:
      return { ...state, pending: true };
    case constant.USERDATAPFULFILLED:
      return { account: action.payload, pending: false };
    case constant.INCBYAMT:
      return { ...state, error: action.error, pending: false };

    default:
      return state;
  }
};
