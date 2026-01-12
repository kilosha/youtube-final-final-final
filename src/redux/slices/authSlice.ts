import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getErrorMessage } from "../../utils/utils";
import { jwtDecode } from "jwt-decode";

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
            return rejectWithValue({ message: getErrorMessage(error) });
        }
    }
);

const register = createAsyncThunk(
    "auth/register",
    async (values: object, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                "https://todo-redev.herokuapp.com/api/users/register",
                {
                    ...values
                }
            );
            return data.token;
        } catch (error) {
            return rejectWithValue({ message: getErrorMessage(error) });
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        isLoading: false,
        userId: ""
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.userId = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload;
            state.isLoading = false;
            state.userId = jwtDecode(action.payload).id;
        });
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.rejected, (state) => {
            state.isLoading = false;
        });
    }
});

export { login, register };

export const { logout } = authSlice.actions;

export default authSlice.reducer;
