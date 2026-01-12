import { createSlice } from "@reduxjs/toolkit";
import type { FavoriteItem } from "../../constants/types";

type FavoritesType = {
    favorites: FavoriteItem[];
};

const initialState: FavoritesType = {
    favorites: []
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push({
                ...action.payload,
                id: crypto.randomUUID()
            });
        },
        editFavorite: (state, action) => {
            state.favorites = state.favorites.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                } else {
                    return item;
                }
            });
        },
        deleteFavorite: (state, action) => {
            state.favorites = state.favorites.filter(
                (item) => item.id !== action.payload.id
            );
        }
    }
});

export const { addFavorite, editFavorite, deleteFavorite } =
    favoritesSlice.actions;

export default favoritesSlice.reducer;
