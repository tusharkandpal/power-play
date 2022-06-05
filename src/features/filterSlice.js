import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryName: "All",
  sortBy: "",
  searchTerm: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.categoryName = action.payload;
    },

    setSortByFilter: (state, action) => {
      state.sortBy = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setCategoryFilter,
  setSortByFilter,
  setSearchTerm,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
