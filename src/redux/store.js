import { configureStore } from "@reduxjs/toolkit";
import likeDislikeReducer from "./features/counterSlice";
const store = configureStore({
  reducer: {
    likeDislike: likeDislikeReducer,
  },
});

export default store;
