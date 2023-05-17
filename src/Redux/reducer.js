import * as constant from "./constants";

// ?Initial state
export const InitialState = {
  account: 0,
};

export const accountReducer = (state = InitialState, action) => {
  switch (action.type) {
    case constant.INC:
      return { account: state.account + 1 };
    case constant.DEC:
      return { account: state.account - 1 };
    case constant.INCBYAMT:
      return { account: state.account + action.payload };

    default:
      return state;
  }
};
