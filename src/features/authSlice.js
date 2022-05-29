import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInService, signUpService } from "../services/services";

const initialState = {
  user: [],
  isLoggedIn: false,
  status: "idle",
  error: null,
};

export const logIn = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }) => {
    return await logInService(email, password);
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }) => {
    return await signUpService(email, password);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => initialState,
  },
  extraReducers: {
    [logIn.pending]: (state) => {
      state.status = "loading";
    },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.foundUser;
      state.isLoggedIn = true;
      state.status = "fulfilled";
    },
    [signUp.pending]: (state) => {
      state.status = "loading";
    },
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload.createdUser;
      state.isLoggedIn = true;
      state.status = "fulfilled";
    },
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
