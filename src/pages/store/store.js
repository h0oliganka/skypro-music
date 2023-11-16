import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./redusers";

export const store = configureStore({
  reducer: {
    AudioPlayer: playerReducer,
  }
});