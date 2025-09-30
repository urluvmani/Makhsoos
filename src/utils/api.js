import axios from "axios";


const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
   withCredentials: true,
});

export const getCart = (userId) => API.get(`/cart/${userId}`);
export const addToCartAPI = (userId, item) => API.post(`/cart/${userId}`, item);
export const clearCartAPI = (userId) => API.delete(`/cart/${userId}`);
export const updateOrderStatus = (orderId, status) =>
  API.put(`/orders/${orderId}/status`, { status });


export default API;
