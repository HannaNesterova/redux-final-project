import { configureStore } from "@reduxjs/toolkit";
import cart from './cartSlice';
import category from './filterSlice';

export const store = configureStore({
    reducer:{
        category,
        cart 
    },
})