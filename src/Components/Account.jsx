import { useState } from "react";
// import {
//   Increment,
//   Decrement,
//   IncrementByAmount,
//   userData,
// } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  Increment,
  Decrement,
  IncrementByAmount,
} from "../ReduxToolkit/toolkitReducer";
import { userAccountBalance } from "../ReduxToolkit/toolkitReducer";

const Account = () => {
  const dispatch = useDispatch();
  //   const amount =    "";
  const amount = useSelector((state) => state.account.amount);
  const realBalance = useSelector((state) => state.account.balance);
  const states = useSelector((state) => state.account);
  //   console.log(states);

  // * Increment without redux
  const [value, setValue] = useState(0);
  //   const [count, setCount] = useState(0);

  //   const Increment = () => {
  //     setCount((prev) => prev + 1);
  //   };
  //   const Decrement = () => {
  //     setCount((prev) => prev - 1);
  //   };
  //   const IncrementByAmount = (values) => {
  //     setCount((prev) => prev + values);
  //   };
  return (
    <>
      <div className="container">
        <div className="account">
          <h4>Account Component</h4>
          {/* {states.pending ? (
            <p style={{ color: "black" }}>Loading...</p>
          ) : states.error ? (
            <p style={{ color: "black" }}>{error}</p>
          ) : (
            <h5>New Balance : {realBalance}</h5>
          )} */}
          <h5>New Balance : {realBalance}</h5>
          <h5>Amount : {amount}</h5>
          <div className="btn">
            <button onClick={() => dispatch(Increment())}>Increment</button>
            <button
              onClick={() => dispatch(Decrement())}
              disabled={amount <= 0}
            >
              Decrement
            </button>
            <input type="number" onChange={(e) => setValue(+e.target.value)} />
            <button onClick={() => dispatch(IncrementByAmount(value))}>
              Increment By Amount
            </button>
            <button onClick={() => dispatch(userAccountBalance(1))}>
              Real Balance
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
