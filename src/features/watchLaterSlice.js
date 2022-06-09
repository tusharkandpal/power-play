import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getWatchLater,
  addToWatchLater,
  removeFromWatchLater,
} from "../services/services";

const initialState = {
  status: "idle",
  error: null,
  watchLater: [],
};

export const loadWatchLater = createAsyncThunk(
  "likes/loadWatchLater",
  async (_, { rejectWithValue, dispatch }) => {
    return await getWatchLater(_, rejectWithValue, dispatch);
  }
);

export const postToWatchLater = createAsyncThunk(
  "likes/postToWatchLater",
  async (video, { rejectWithValue, dispatch }) => {
    return await addToWatchLater(video, rejectWithValue, dispatch);
  }
);

export const deleteFromWatchLater = createAsyncThunk(
  "likes/deleteFromWatchLater",
  async (videoId, { rejectWithValue, dispatch }) => {
    return await removeFromWatchLater(videoId, rejectWithValue, dispatch);
  }
);

const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState,
  reducers: {
    resetWatchLater: () => {
      return initialState;
    },
  },
  extraReducers: {
    // loadWatchLater
    [loadWatchLater.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.watchLater = action.payload.watchlater;
    },
    [loadWatchLater.pending]: (state) => {
      state.status = "loading";
    },
    [loadWatchLater.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // postToWatchLater
    [postToWatchLater.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.watchLater = action.payload.watchlater;
    },
    [postToWatchLater.pending]: (state) => {
      state.status = "loading";
    },
    [postToWatchLater.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // deleteFromWatchLater
    [deleteFromWatchLater.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.watchLater = action.payload.watchlater;
    },
    [deleteFromWatchLater.pending]: (state) => {
      state.status = "loading";
    },
    [deleteFromWatchLater.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { resetWatchLater } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;
