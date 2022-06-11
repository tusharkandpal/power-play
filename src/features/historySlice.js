import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHistory,
  addToHistory,
  removeFromHistory,
  removeAllHistory,
} from "../services/services";

const initialState = {
  status: "idle",
  error: null,
  history: [],
};

export const loadHistory = createAsyncThunk(
  "likes/loadHistory",
  async (_, { rejectWithValue }) => {
    return await getHistory(_, rejectWithValue);
  }
);

export const postToHistory = createAsyncThunk(
  "likes/postToHistory",
  async (video, { rejectWithValue }) => {
    return await addToHistory(video, rejectWithValue);
  }
);

export const deleteFromHistory = createAsyncThunk(
  "likes/deleteFromHistory",
  async (videoId, { rejectWithValue, dispatch }) => {
    return await removeFromHistory(videoId, rejectWithValue, dispatch);
  }
);

export const deleteAllHistory = createAsyncThunk(
  "likes/deleteAllHistory",
  async (_, { rejectWithValue, dispatch }) => {
    return await removeAllHistory(_, rejectWithValue, dispatch);
  }
);

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    resetHistory: () => {
      return initialState;
    },
  },
  extraReducers: {
    // loadHistory
    [loadHistory.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.history = action.payload.history;
    },
    [loadHistory.pending]: (state) => {
      state.status = "loading";
    },
    [loadHistory.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // postToHistory
    [postToHistory.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.history = action.payload.history;
    },
    [postToHistory.pending]: (state) => {
      state.status = "loading";
    },
    [postToHistory.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // deleteFromHistory
    [deleteFromHistory.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.history = action.payload.history;
    },
    [deleteFromHistory.pending]: (state) => {
      state.status = "loading";
    },
    [deleteFromHistory.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // deleteAllHistory
    [deleteAllHistory.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.history = action.payload.history;
    },
    [deleteAllHistory.pending]: (state) => {
      state.status = "loading";
    },
    [deleteAllHistory.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { resetHistory } = historySlice.actions;

export default historySlice.reducer;
