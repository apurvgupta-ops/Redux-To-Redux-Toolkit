import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

// **ACTIONS CONSTANTS
const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBYAMOUNT = "incrementByAmount";
const USERDETAILS = "userDetails";

// ** STORE
const store = createStore(
  reducer,
  applyMiddleware(logger.default, thunk.default)
);

// **THIS IS FOR GETTING THE PREVIOUS VALUE
const history = [];
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case USERDETAILS:
      return {
        amount: action.payload,
      };
    case INCREMENT:
      return {
        amount: state.amount + 1,
      };
    case DECREMENT:
      return {
        amount: state.amount - 1,
      };

    case INCREMENTBYAMOUNT:
      return {
        amount: state.amount + action.payload,
      };
    default:
      state;
  }
}

// **ACTIONS CREATOR
// ? API CALLING
//async function getUser(dispatch, getState) {
//   const { data } = await axios.get(`http://localhost:3000/accounts/1`);
//   dispatch({ type: USERDETAILS, payload: data.amount });
// }

// ! Dispatch and getState is comes from redux thunk
// ** if we want data according to id
function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount));
  };
}

function initUser(value) {
  return { type: USERDETAILS, payload: value };
}

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

// ? CALLING THE DIRECT FUNCTION WHICH GIVES THE RESPONSE OF THE OBJECT
// setTimeout(() => {
//     store.dispatch(getUser());
//   }, 2000);

// ? CALLING THE FUNCTION WHICH USE THE REDUX THUNK
// setTimeout(() => {
store.dispatch(getUser(1));
// }, 2000);
