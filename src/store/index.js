import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";

export default configureStore({
  reducer: {
    shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(configureStore.dispatch)
