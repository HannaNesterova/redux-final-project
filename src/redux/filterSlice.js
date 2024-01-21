import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name:'category',
    initialState:{
        selectedCategory:'all',
        searchQuery: '',
    },
    reducers:{
        filterCategory : (state, action) => {
            state.selectedCategory = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
})


export const { filterCategory, setSearchQuery } = filterSlice.actions;
export const getSelectedCategory = (state) => state.category.selectedCategory;
export const getSearchQuery = (state) => state.category.searchQuery;
export default filterSlice.reducer;