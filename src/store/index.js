import { configureStore } from "@reduxjs/toolkit";
import shopReducer from '../features/shop/shopSlice'


export default configureStore({
    reducer: {
        shopReducer
    }
})