import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Account from "./Components/Account";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="container">
        <h2>Current Amount : 0</h2>
        <Account />
      </main>
    </>
  );
}

export default App;
