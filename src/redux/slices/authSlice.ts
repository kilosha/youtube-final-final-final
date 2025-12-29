import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk(
    "auth/login",
    async (values: object, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                "https://todo-redev.herokuapp.com/api/auth/login",
                {
                    ...values
                }
            );
            return data.token;
        } catch (error) {
            // return rejectWithValue({ message: getErrorMessage(error) });
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null
    },
    reducers: {
        logout: (state) => {
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload;
        });
    }
});

export { login };

export const { logout } = authSlice.actions;

export default authSlice.reducer;
