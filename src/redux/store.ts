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
    whitelist: ["token"]
};

const rootReducer = combineReducers({
    videos: videosReducer,
    favorites: favoritesReducer,
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
