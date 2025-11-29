import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./slices/videosSlice";
import favoritesReducer from "./slices/favoritesSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        favorites: favoritesReducer
    }
});
