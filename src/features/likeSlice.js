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
  async (_, { rejectWithValue, dispatch }) => {
    return await getLikedVideos(_, rejectWithValue, dispatch);
  }
);

export const postLikedVideos = createAsyncThunk(
  "likes/postLikedVideos",
  async (video, { rejectWithValue, dispatch }) => {
    return await addToLikedVideos(video, rejectWithValue, dispatch);
  }
);

export const deleteLikedVideos = createAsyncThunk(
  "likes/deleteLikedVideos",
  async (videoId, { rejectWithValue, dispatch }) => {
    return await removeFromLikedVideos(videoId, rejectWithValue, dispatch);
  }
);

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    resetLikes: () => {
      return initialState;
    },
  },
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

export const { resetLikes } = likeSlice.actions;

export default likeSlice.reducer;
