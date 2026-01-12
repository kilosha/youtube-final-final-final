import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";

import videosReducer from "./slices/videosSlice";
import favoritesReducer from "./slices/favoritesSlice";
import authReducer from "./slices/authSlice";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token", "userId"]
};

const favoritesPersistConfig = {
    key: "favorites",
    storage,
    whitelist: ["favorites"]
};

const rootReducer = combineReducers({
    videos: videosReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    auth: persistReducer(authPersistConfig, authReducer)
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
});

export const persistor = persistStore(store);

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
