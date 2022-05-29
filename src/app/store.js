import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import videoReducer from "../features/videoSlice";
import displayReducer from "../features/displaySlice";
import authReducer from "../features/authSlice";

const reducer = combineReducers({
  videoTimeline: videoReducer,
  displayTimeline: displayReducer,
  authTimeline: authReducer,
});

export const store = configureStore({
  reducer,
});
