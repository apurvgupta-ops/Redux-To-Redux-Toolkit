// **Pure Redux
import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// ?Actions Constants
const INC = "increment";
const DEC = "decrement";
const INCBYAMT = "incByAmt";
const USERDATA = "userData";

// ?Store
const store = createStore(
  reducers,
  applyMiddleware(logger.default, thunk.default)
);

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
    case USERDATA:
      return { amount: action.payload + state.amount };
    default:
      return state;
  }
}

// ? Api calling
// * If we have dynamic user id
function userData(id) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(initUser(data.amount));
      // console.log("22", getState());
    } catch (error) {
      console.log(error);
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
function initUser(value) {
  return { type: USERDATA, payload: value };
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
