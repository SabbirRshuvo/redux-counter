import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementDislikes,
  incrementLikes,
  reset,
} from "../redux/features/counterSlice";

const LikeDislike = () => {
  const { likes, dislikes } = useSelector((state) => state.likeDislike);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white max-w-md mx-auto rounded-xl shadow-xl p-8 space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Like/ Dislike</h2>
        <p className="text-md font-semibold">
          Likes : <span className="text-green-500 font-bold">{likes}</span>
        </p>
        <p className="text-md font-semibold">
          DisLikes : <span className="text-red-500 font-bold">{dislikes}</span>
        </p>
        <div className="gap-4 space-x-4  w-full">
          <button
            onClick={() => dispatch(incrementLikes())}
            className="px-4 py-2 rounded-md  text-white bg-green-600 cursor-pointer"
          >
            Add Like
          </button>
          <button
            onClick={() => dispatch(incrementDislikes())}
            className="px-4 py-2 rounded-md  text-white bg-red-600 cursor-pointer"
          >
            Add Dislike
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="px-4 py-2 rounded-md  text-white bg-gray-600 cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikeDislike;
