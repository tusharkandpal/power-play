import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import videoReducer from "../features/videoSlice";
import displayReducer from "../features/displaySlice";
import authReducer from "../features/authSlice";
import filterReducer from "../features/filterSlice";
import likeReducer from "../features/likeSlice";
import playlistReducer from "../features/playlistSlice";
import watchLaterReducer from "../features/watchLaterSlice";

const reducer = combineReducers({
  videoTimeline: videoReducer,
  likeTimeline: likeReducer,
  displayTimeline: displayReducer,
  authTimeline: authReducer,
  filterTimeline: filterReducer,
  playlistTimeline: playlistReducer,
  watchLaterTimeline: watchLaterReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ],
});
