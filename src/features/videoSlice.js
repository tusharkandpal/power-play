import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVideos, getCategories } from "../services/services";

const initialState = {
  status: "idle",
  error: null,
  videos: [],
  categories: [],
};

export const loadVideos = createAsyncThunk("videos/loadVideos", async () => {
  return await getVideos();
});

export const loadCategories = createAsyncThunk("videos/loadCategories", async () => {
  return await getCategories();
});

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: {
    [loadVideos.pending]: (state) => {
      state.status = "loading";
    },
    [loadVideos.fulfilled]: (state, action) => {
      state.videos = action.payload.videos;
      state.status = "fulfilled";
    },
    [loadCategories.fulfilled]: (state, action) => {
      state.categories = action.payload.categories;
    },
  },
});

export default videoSlice.reducer;
