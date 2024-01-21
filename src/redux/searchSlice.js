import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name:'category',
    initialState:{
        selectedCategory:'sweet'
    },
    reducers:{
        filterCategory : (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})


export const getSelectedCategory = state => state.category.selectedCategory;
export const {filterCategory} = searchSlice.actions;
export default searchSlice.reducer; 