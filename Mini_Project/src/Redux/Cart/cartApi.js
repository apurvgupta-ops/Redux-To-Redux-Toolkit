import axios from "axios";
export const fetchCart = () => {
  return axios.get("http://localhost:8080/cart");
};

export const addToCart = (item) => {
  return axios.post("http://localhost:8080/cart", item);
};

export const updateInCart = (id, item) => {
  return axios.patch(`http://localhost:8080/cart/${id}`, item);
};

export const deleteFromCart = (id) => {
  return axios.delete(`http://localhost:8080/cart/${id}`);
};
