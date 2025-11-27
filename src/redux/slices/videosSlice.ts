import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { responseFormatter } from "../../utils/utils";
import axios from "axios";

import response from "../../response.js";

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

const getVideos = createAsyncThunk(
    "videos/getVideos",
    async (searchValue, thunkAPI) => {
        const response = await axios.get(
            "https://youtube.googleapis.com/youtube/v3/search",
            {
                params: {
                    type: "video",
                    part: "snippet",
                    maxResults: 12,
                    q: searchValue,
                    key: import.meta.env.VITE_API_KEY
                }
            }
        );
        const data = response.data;
        const result = responseFormatter(data);

        return { ...result, searchValue };
    }
);

const data = responseFormatter(response);
const initialState = { ...data, searchQuery: "Диана Пилат" };

export const videosSlice = createSlice({
    name: "videos",
    initialState,
    // initialState: {
    //     videos: [],
    //     totalResults: 0
    // },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVideos.fulfilled, (state, action) => {
            state.videos = action.payload.videos;
            state.totalResults = action.payload.totalResults;
        });
    }
});

export { getVideos };

export default videosSlice.reducer;
