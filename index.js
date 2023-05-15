// **Pure Redux
import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// ?Actions Constants
const INC = "increment";
const DEC = "decrement";
const INCBYAMT = "incByAmt";
// const USERDATA = "userData"; // For Checking
const USERDATAPENDING = "userDataPending";
const USERDATAFULFILLED = "userDataFulfilled";
const USERDATAFAILED = "userDataFailed";

// ?Store
const store = createStore(
  reducers,
  applyMiddleware(logger.default, thunk.default)
);

// ?Combine Reducers
// const store = createStore(
//     combineReducers({
//        amount : amountReducer,
//        bonus : amountReducer,
//    })
//     applyMiddleware(logger.default, thunk.default)
//   );

// ?For showing previous values
const history = [];

// ?Reducers
function reducers(state = { amount: 10 }, action) {
  switch (action.type) {
    case INC:
      return { amount: state.amount + 5 };
    case DEC:
      return { amount: state.amount - 5 };
    case INCBYAMT:
      return { amount: state.amount + action.payload };
    // case USERDATA:
    //   return { amount: action.payload + state.amount };
    case USERDATAPENDING:
      return { ...state, pending: true };
    case USERDATAFULFILLED:
      return { amount: action.payload + state.amount, pending: false };
    case USERDATAFAILED:
      return { ...state, error: action.payload, pending: true };

    default:
      return state;
  }
}

// ? Api calling
// * If we have dynamic user id
function userData(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserDataPending());
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getUserDataFulfilled(data.amount));
      // console.log("22", getState());
    } catch (error) {
      dispatch(getUserDataFailed(error.message));
    }
  };
}

// ?Actions Creator
function increment() {
  return { type: INC };
}
function decrement() {
  return { type: DEC };
}
function incrementByAmount(value) {
  return { type: INCBYAMT, payload: value };
}
function getUserDataPending() {
  return { type: USERDATAPENDING };
}
function getUserDataFulfilled(value) {
  return { type: USERDATAFULFILLED, payload: value };
}
function getUserDataFailed(error) {
  return { type: USERDATAFAILED, error: error };
}

// ?Subscribe = Subscribe functions call only when there is any change.
// *GetState is the global object
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

// ?Dispatch
setTimeout(() => {
  store.dispatch(userData(2));
}, 2000);
