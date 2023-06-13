import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import cartImg from "../assets/cart.png";
const Cart = () => {
  return (
    <div>
      <div>
        <div className={styles.cartItem}>
          <img className={styles.imgFluid} alt="" src={cartImg} />
          <div className={styles.description}>
            <p>hello</p>
            <span>hey</span>
            <strong>$76</strong>
          </div>
          <div className={styles.quantity}>
            Quantity
            <select>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className={styles.close}>
            <button>X</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
