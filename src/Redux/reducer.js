import * as constant from "./constants";

// ?Initial state
export const InitialState = {
  account: 0,
  balance: 0,
};

export const accountReducer = (state = InitialState, action) => {
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
