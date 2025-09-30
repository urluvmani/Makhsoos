import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistStore, persistReducer } from "redux-persist";

import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

// ✅ Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"], // sirf auth + cart persist honge
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist ke liye disable
    }),
});

export const persistor = persistStore(store);
