import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-wrap gap-10">
      {products.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          <img src={item.image} alt="product image" className="w-72 h-96" />
          <h4 className="text-ellipsis overflow-hidden">{item.title}</h4>
          <h5>{item.price}</h5>
          <button className="bg-cyan-950 text-white p-2 rounded-md">
            Add to car
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
