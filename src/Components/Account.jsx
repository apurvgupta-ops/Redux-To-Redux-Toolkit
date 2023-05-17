import { useState } from "react";
import { Increment, Decrement, IncrementByAmount } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Account = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);

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
          <h5>Amount : {account}</h5>
          <div className="btn">
            <button onClick={() => dispatch(Increment())}>Increment</button>
            <button onClick={() => dispatch(Decrement())}>Decrement</button>
            <input type="number" onChange={(e) => setValue(+e.target.value)} />
            <button onClick={() => dispatch(IncrementByAmount(value))}>
              Increment By Amount
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
