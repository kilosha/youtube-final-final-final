import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { responseFormatter } from "../../utils/utils";
import axios from "axios";

// Создаем асинхронное действие с помощью createAsyncThunk
// const fetchGetTasks = createAsyncThunk(
//     "todos/fetchGetTasks",
//     async (_, { rejectWithValue }) => {
//         try {
//             const { data } = await API.get("/todos");
//             return data;
//         } catch (error) {
//             return rejectWithValue({ message: getErrorMessage(error) });
//         }
//     }
// );

// const getFavorites = createAsyncThunk(
//     "favorites/getFavorites",
//     async (searchValue, thunkAPI) => {
//         const response = await axios.get(
//             "https://youtube.googleapis.com/youtube/v3/search",
//             {
//                 params: {
//                     type: "video",
//                     part: "snippet",
//                     maxResults: 12,
//                     q: searchValue,
//                     key: import.meta.env.VITE_API_KEY
//                 }
//             }
//         );
//         const data = response.data;
//         const result = responseFormatter(data);

//         return { ...result, searchValue };
//     }
// );

export const favoritesSlice = createSlice({
    name: "favorites",
    //initialState,
    initialState: {
        favorites: [
            {
                query: "diana pilat heelssession",
                title: "diana pilat heelssession",
                sortBy: "relevance",
                maxResults: 22,
                id: "4e8676de-ff89-4a70-8253-46b9dbdd1258"
            }
        ]
    },
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
        }
    }
    // extraReducers: (builder) => {
    //     builder.addCase(getFavorites.fulfilled, (state, action) => {
    //         state.favorites = action.payload.favorites;
    //         state.totalResults = action.payload.totalResults;
    //     });
    // }
});

//export { getFavorites };

export const { addFavorite, editFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
