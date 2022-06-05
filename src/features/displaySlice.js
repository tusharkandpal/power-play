import { createSlice } from "@reduxjs/toolkit";
import { getToastProperties } from "../utils/getToastProperties"

const initialState = {
  sidebarToggle: false,
  dropdownDisplay: "hidden",
  authToggle: "LOGIN",
  toastList: [],
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
    setDropdown: (state, action) => {
      state.dropdownDisplay = action.payload;
    },
    addToast: (state, action) => {
      state.toastList = [
        ...state.toastList,
        getToastProperties(action.payload)
      ];
    },
    removeToast: (state, action) => {
      state.toastList = state.toastList.filter(
        (toast) => toast.id !== action.payload
      );
    },
  },
});

export const { toggleSidebar, toggleAuth, setDropdown, addToast, removeToast } =
  displaySlice.actions;

export default displaySlice.reducer;
