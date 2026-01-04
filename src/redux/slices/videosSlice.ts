import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { responseFormatter } from "../../utils/utils";
import axios from "axios";

import responseMock from "../../response.js";

const getVideos = createAsyncThunk(
    "videos/getVideos",
    async (searchInfo: { query: string; maxResults: number }, thunkAPI) => {
        // const response = await axios.get(
        //     "https://youtube.googleapis.com/youtube/v3/search",
        //     {
        //         params: {
        //             type: "video",
        //             part: "snippet",
        //             maxResults: searchInfo.maxResults || 12,
        //             q: searchInfo.query,
        //             key: import.meta.env.VITE_API_KEY
        //         }
        //     }
        // );
        // const data = response.data;
        // const result = responseFormatter(data);
        const result = responseFormatter(responseMock);

        return { ...result, query: searchInfo.query };
    }
);

export const videosSlice = createSlice({
    name: "videos",
    initialState: {
        videos: [],
        totalResults: 0,
        query: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVideos.fulfilled, (state, action) => {
            state.videos = action.payload.videos;
            state.totalResults = action.payload.totalResults;
            state.query = action.payload.query;
        });
    }
});

export { getVideos };

export default videosSlice.reducer;
