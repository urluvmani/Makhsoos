import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // {id, name, price, qty, image}
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((p) => p.id === item.id);
      if (existing) {
        existing.qty += item.qty || 1;
      } else {
        state.items.push({ ...item, qty: item.qty || 1 });
      }
      state.total = state.items.reduce((sum, p) => sum + p.price * p.qty, 0);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
      state.total = state.items.reduce((sum, p) => sum + p.price * p.qty, 0);
    },
    increaseQty: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item) item.qty += 1;
      state.total = state.items.reduce((sum, p) => sum + p.price * p.qty, 0);
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      state.total = state.items.reduce((sum, p) => sum + p.price * p.qty, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
