import axios from "axios";
import * as constant from "./constants";

export const Increment = () => {
  return { type: constant.INC };
};

export const Decrement = () => {
  return { type: constant.DEC };
};

export const IncrementByAmount = (value) => {
  return { type: constant.INCBYAMT, payload: value };
};

export const userDataPending = () => {
  return { type: constant.USERDATAPENDING };
};
export const userDatafulfilled = (value) => {
  return { type: constant.USERDATAPFULFILLED, payload: value };
};
export const userDataFailed = (error) => {
  return { type: constant.USERDATAFAILED, error: error };
};

// ? API Callings
export const userData = async (dispatch, getState) => {
  try {
    dispatch(userDataPending());
    const { data } = await axios.get(`http://localhost:8080/accounts/1`);
    dispatch(userDatafulfilled(data.amount));
  } catch (error) {
    dispatch(userDataFailed(error.message));
  }
};
