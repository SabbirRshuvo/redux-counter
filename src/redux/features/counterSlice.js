import { createSlice } from "@reduxjs/toolkit";

export const likeDislikeSlice = createSlice({
  name: "likeDislike",
  initialState: {
    likes: 0,
    dislikes: 0,
  },
  reducers: {
    incrementLikes: (state) => {
      state.likes += 1;
    },
    incrementDislikes: (state) => {
      state.dislikes += 1;
    },
    reset: (state) => {
      (state.likes = 0), (state.dislikes = 0);
    },
  },
});

export const { likes, dislikes, incrementLikes, incrementDislikes, reset } =
  likeDislikeSlice.actions;

export default likeDislikeSlice.reducer;
