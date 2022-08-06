import { createSlice } from "@reduxjs/toolkit";
import { getToastProperties } from "../utils/getToastProperties";

const initialState = {
  sidebarToggle: false,
  dropdownDisplay: "hidden",
  showModal: false,
  authToggle: "LOGIN",
  toastList: [],
  passwordType: "password"
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
        getToastProperties(action.payload),
      ];
    },
    removeToast: (state, action) => {
      state.toastList = state.toastList.filter(
        (toast) => toast.id !== action.payload
      );
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setPasswordType: (state, action) => {
      state.passwordType = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  toggleAuth,
  setDropdown,
  addToast,
  removeToast,
  setShowModal,
  setPasswordType
} = displaySlice.actions;

export default displaySlice.reducer;
