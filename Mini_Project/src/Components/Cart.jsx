import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import cartImg from "../assets/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItems, updateCartItems } from "../Redux/Cart/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  // console.log(carts);

  const handleUpdate = (e, id) => {
    dispatch(updateCartItems({ id, change: { quantity: +e.target.value } }));
  };
  return (
    <div>
      <div>
        {carts.map((item) => (
          <div className={styles.cartItem}>
            <img className={styles.imgFluid} alt="" src={item.thumbnail} />
            <div className={styles.description}>
              <p>{item.title}</p>
              <span>{item.description}</span>
              <strong>{item.price}</strong>
            </div>
            <div className={styles.quantity}>
              Quantity
              <select
                value={item.quantity}
                onChange={(e) => handleUpdate(e, item.id)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className={styles.close}>
              <button onClick={() => dispatch(deleteCartItems(item.id))}>
                X
              </button>
            </div>
          </div>
        ))}
      </div>

      <h1>
        Total:{" "}
        {carts.reduce((acc, item) => item.price * item.quantity + acc, 0)}
      </h1>
    </div>
  );
};
export default Cart;
