import { configureStore } from "@reduxjs/toolkit";
import category from './searchSlice';

export const store = configureStore({
    reducer:{
        category
    },
})