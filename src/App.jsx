import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Account from "./Components/Account";
import { useSelector } from "react-redux";
import Bouns from "./Components/Bonus";

const App = () => {
  const realBalance = useSelector((state) => state.reducer);
  // const realBalance = 0;

  return (
    <>
      <main className="container">
        {/* {realBalance.pending ? (
          <p>Loading...</p>
        ) : realBalance.error ? (
          error.message
        ) : (
          <h2>Current Amount : {realBalance}</h2>
        )} */}

        <h2>Current Amount : {realBalance}</h2>
        <Account />
        <Bouns />
      </main>
    </>
  );
};

export default App;
