import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <button onClick={() => setShowCart(!showCart)}>Cart </button>
      <div>{showCart ? <Cart /> : <Products />}</div>
    </>
  );
}

export default App;
