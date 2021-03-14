import { createSlice } from "@reduxjs/toolkit"
import { IUsersState } from "../components/Users/users-types"

export const userSlice = createSlice({
    name: 'image',
    initialState: null,
    reducers: {
        getUsers: () => {},
        setUsers: (state, action) =>  action.payload
    }
})

export const {
    getUsers,
    setUsers,
} = userSlice.actions

export const selectUser = (state: IUsersState) => state.users