import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "../Redux/productSlice";
import styles from "./Products.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  console.log(products);
  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        {products.map((product) => (
          <div className={styles.card}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100%" }}
            />
            <h1>{product.title}</h1>
            <p className={styles.price}>${product.price}</p>
            <p>{product.description}</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
