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
