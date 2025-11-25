import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./slices/videosSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer
    }
});
