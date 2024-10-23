import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reduxToolKitApi";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
