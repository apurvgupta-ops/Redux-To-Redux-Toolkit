import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Account from "./Components/Account";
import { useSelector } from "react-redux";

const App = () => {
  const realBalance = useSelector((state) => state.account);

  return (
    <>
      <main className="container">
        {realBalance.pending ? (
          <p>Loading...</p>
        ) : realBalance.error ? (
          error.message
        ) : (
          <h2>Current Amount : {realBalance}</h2>
        )}
        <Account />
      </main>
    </>
  );
};

export default App;
