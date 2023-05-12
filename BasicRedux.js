import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// **ACTIONS CONSTANTS
const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBYAMOUNT = "incrementByAmount";

// ** STORE
const store = createStore(reducer, applyMiddleware(logger.default));

// **THIS IS FOR GETTING THE PREVIOUS VALUSE
const history = [];
function reducer(state = { amount: 1 }, action) {
  if (action.type === INCREMENT) {
    return {
      amount: state.amount + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      amount: state.amount - 1,
    };
  }

  if (action.type === INCREMENTBYAMOUNT) {
    return {
      amount: state.amount + action.payload,
    };
  }

  return state;
}

// **ACTIONS CREATOR
function increment() {
  return { type: INCREMENT };
}
function decrement() {
  return { type: DECREMENT };
}
function incrementByAmount(value) {
  return { type: INCREMENTBYAMOUNT, payload: value };
}

// **Global state = getState()
// console.log(store.getState());

// **ACTION TYPES
// {
//   type: "increment";
// }

// **THIS IS FOR PERFORM THE ACTION TYPES
// store.dispatch({ type: "increment" });

// console.log(store.getState());

// **THIS IS USED TO CALL ACTION WHEN EVER THE STATE GET CHANGED
// store.subscribe(() => {
//   //   history.push(store.getState());
//   console.log(store.getState());
// });

setInterval(() => {
  store.dispatch(increment());
}, 2000);
