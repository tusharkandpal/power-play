import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInService, signUpService } from "../services/services";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || [],
  isLoggedIn: localStorage.getItem("token") ? true : false,
  status: "idle",
  error: null,
};

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, { rejectWithValue }) => {
    return await logInService(credentials, rejectWithValue);
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials, { rejectWithValue }) => {
    return await signUpService(credentials, rejectWithValue);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Log-Out
    logOut: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return { user: [], isLoggedIn: false, error: null, status: "idle" };
    },
  },
  extraReducers: {
    // Log-In
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.foundUser;
      state.isLoggedIn = true;
      state.status = "fulfilled";
      localStorage.setItem("token", action.payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(action.payload.foundUser));
    },
    [logIn.pending]: (state) => {
      state.status = "loading";
    },
    [logIn.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    },

    // Sign-Up
    [signUp.pending]: (state) => {
      state.status = "loading";
    },
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload.createdUser;
      state.isLoggedIn = true;
      state.status = "fulfilled";
    },
    [signUp.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "rejected";
    },
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
