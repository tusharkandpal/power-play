import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarToggle: false,
  authToggle: "LOGIN",
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarToggle = !state.sidebarToggle;
    },
    toggleAuth: (state, action) => {
      state.authToggle = action.payload;
    },
  },
});

export const { toggleSidebar, toggleAuth } = displaySlice.actions;

export default displaySlice.reducer;
