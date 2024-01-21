import { configureStore } from "@reduxjs/toolkit";
import category from './filterSlice';

export const store = configureStore({
    reducer:{
        category
    },
})