/**  types for Users component*/

export type TUserState = {
    id: number
    name: string
    email: string
    phone: string
    website: string
    username: string
}

export type TArrayUsersState = TUserState[]

export interface IUsersState {
    users: TArrayUsersState
}


export interface IUser {
    user: TUserState
    key: number
}

