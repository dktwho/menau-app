import {createSlice} from "@reduxjs/toolkit";

export interface UserState {
    jwt: string | null
}

const initialState: UserState = {
    jwt: null
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addJwt: (state) => {
            state.jwt = 'sssddfs'
        },
        logout: (state) => {
            state.jwt = null
        }
    }
})