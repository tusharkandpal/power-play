import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getLikedVideos,
  addToLikedVideos,
  removeFromLikedVideos,
} from "../services/services";

const initialState = {
  status: "idle",
  error: null,
  likes: [],
};

export const loadLikedVideos = createAsyncThunk(
  "likes/loadLikedVideos",
  async (_, { rejectWithValue }) => {
    return await getLikedVideos(_, rejectWithValue);
  }
);

export const postLikedVideos = createAsyncThunk(
  "likes/postLikedVideos",
  async (video, { rejectWithValue }) => {
    return await addToLikedVideos(video, rejectWithValue);
  }
);

export const deleteLikedVideos = createAsyncThunk(
  "likes/deleteLikedVideos",
  async (videoId, { rejectWithValue }) => {
    return await removeFromLikedVideos(videoId, rejectWithValue);
  }
);

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {},
  extraReducers: {
    // loadLikedVideos
    [loadLikedVideos.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.likes = action.payload.likes;
    },
    [loadLikedVideos.pending]: (state) => {
      state.status = "loading";
    },
    [loadLikedVideos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // postLikedVideos
    [postLikedVideos.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.likes = action.payload.likes;
    },
    [postLikedVideos.pending]: (state) => {
      state.status = "loading";
    },
    [postLikedVideos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // deleteLikedVideos
    [deleteLikedVideos.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.likes = action.payload.likes;
    },
    [deleteLikedVideos.pending]: (state) => {
      state.status = "loading";
    },
    [deleteLikedVideos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default likeSlice.reducer;
