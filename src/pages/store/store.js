import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./redusers";
import { tracksApi } from "./services";

export const store = configureStore({
  reducer: {
    AudioPlayer: playerReducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tracksApi.middleware),
});