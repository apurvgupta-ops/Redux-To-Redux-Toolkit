import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { applyMiddleware, createStore } from "redux";
// import { accountReducer } from "./Redux/reducer.js";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { accountReducerToolkit } from "./ReduxToolkit/toolkitReducer.js";
import { bounsReducerToolkit } from "./ReduxToolkit/bonusReducer.js";

// const store = createStore(accountReducer, applyMiddleware(logger, thunk));
// const rootReducer = combineReducers({
//   account: accountReducerToolkit,
//   bonus: bounsReducerToolkit,
// });

const store = configureStore({
  reducer: {
    account: accountReducerToolkit.reducer,
    bonus: bounsReducerToolkit.reducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
