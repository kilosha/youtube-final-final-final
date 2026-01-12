import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { responseFormatter } from "../../utils/utils";
import axios from "axios";

import responseMock from "../../response.js";
import { logout } from "./authSlice.js";

const getVideos = createAsyncThunk(
    "videos/getVideos",
    async (
        searchInfo: { query: string; maxResults?: number; sortBy?: string },
        thunkAPI
    ) => {
        const response = await axios.get(
            "https://youtube.googleapis.com/youtube/v3/search",
            {
                params: {
                    type: "video",
                    part: "snippet",
                    maxResults: searchInfo.maxResults || 12,
                    order: searchInfo.sortBy || "relevance",
                    q: searchInfo.query,
                    key: import.meta.env.VITE_API_KEY
                }
            }
        );
        const data = response.data;
        const result = responseFormatter(data);
        //const result = responseFormatter(responseMock);

        return { ...result, query: searchInfo.query };
    }
);

const initialState = {
    videos: [],
    totalResults: 0,
    query: "",
    isLoading: false
};

export const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVideos.fulfilled, (state, action) => {
            state.videos = action.payload.videos;
            state.totalResults = action.payload.totalResults;
            state.query = action.payload.query;
            state.isLoading = false;
        });
        builder.addCase(getVideos.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getVideos.rejected, (state) => {
            state.isLoading = true;
        });
        builder.addCase(logout, () => initialState);
    }
});

export { getVideos };

export default videosSlice.reducer;
