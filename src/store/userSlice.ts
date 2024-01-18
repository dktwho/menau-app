import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadState} from "./storage.ts";
import {LoginResponse} from "../interfaces/auth.interface.ts";
import {PREFIX} from "../helpers/api.ts";
import axios from "axios";

export const JWT_PERSISTENT_STATE = 'userData'

export interface UserState {
    jwt: string | null
    loginErrorMessage?: string
}

export interface UserPersistantState {
    jwt: string | null
}

const initialState: UserState = {
    jwt: loadState<UserPersistantState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
}

export const login = createAsyncThunk('user/login',
    async (params: { email: string, password: string }) => {
        const {data} = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
                email: params.email,
                password: params.password,
            }
        );
        return data;
    })


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.jwt = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
            state.jwt = action.payload.access_token
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loginErrorMessage = action.error.message
        })
    }
})

export default userSlice.reducer;
export const userActions = userSlice.actions