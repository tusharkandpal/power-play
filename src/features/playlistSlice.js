import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPlaylists,
  addToPlaylists,
  removeFromPlaylists,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from "../services/services";

const initialState = {
  playlists: [],
  error: null,
  status: "idle",
};

export const loadPlaylists = createAsyncThunk(
  "playlists/loadPlaylists",
  async (_, { rejectWithValue, dispatch }) => {
    return await getPlaylists(_, rejectWithValue, dispatch);
  }
);

export const postToPlaylists = createAsyncThunk(
  "playlists/postToPlaylists",
  async (playlist, { rejectWithValue, dispatch }) => {
    return await addToPlaylists(playlist, rejectWithValue, dispatch);
  }
);

export const deleteFromPlaylists = createAsyncThunk(
  "playlists/deleteFromPlaylists",
  async (playlistId, { rejectWithValue, dispatch }) => {
    return await removeFromPlaylists(playlistId, rejectWithValue, dispatch);
  }
);

export const loadPlaylist = createAsyncThunk(
  "playlists/loadPlaylist",
  async (playlistId, { rejectWithValue, dispatch }) => {
    return await getPlaylist(playlistId, rejectWithValue, dispatch);
  }
);

export const postVideoToPlaylist = createAsyncThunk(
  "playlists/postVideoToPlaylist",
  async (data, { rejectWithValue, dispatch }) => {
    return await addVideoToPlaylist(data, rejectWithValue, dispatch);
  }
);

export const deleteVideoFromPlaylist = createAsyncThunk(
  "playlists/deleteVideoFromPlaylist",
  async (data, { rejectWithValue, dispatch }) => {
    return await removeVideoFromPlaylist(data, rejectWithValue, dispatch);
  }
);

const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    resetPlaylists: () => {
      return initialState;
    },
  },
  extraReducers: {
    // loadPlaylists
    [loadPlaylists.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.playlists = action.payload.playlists;
    },
    [loadPlaylists.pending]: (state) => {
      state.status = "loading";
    },
    [loadPlaylists.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // postToPlaylists
    [postToPlaylists.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.playlists = action.payload.playlists;
    },
    [postToPlaylists.pending]: (state) => {
      state.status = "loading";
    },
    [postToPlaylists.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // deleteFromPlaylists
    [deleteFromPlaylists.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.playlists = action.payload.playlists;
    },
    [deleteFromPlaylists.pending]: (state) => {
      state.status = "loading";
    },
    [deleteFromPlaylists.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // postVideoToPlaylist
    [postVideoToPlaylist.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.playlists = state.playlists.map((playlist) =>
        playlist._id === action.payload.playlist._id
          ? { ...playlist, videos: action.payload.playlist.videos }
          : playlist
      );
    },
    [postVideoToPlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [postVideoToPlaylist.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    // deleteVideoFromPlaylist
    [deleteVideoFromPlaylist.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.playlists = state.playlists.map((playlist) =>
        playlist._id === action.payload.playlist._id
          ? { ...playlist, videos: action.payload.playlist.videos }
          : playlist
      );
    },
    [deleteVideoFromPlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [deleteVideoFromPlaylist.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { resetPlaylists } = playlistSlice.actions;

export default playlistSlice.reducer;
