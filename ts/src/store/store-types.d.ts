import { store, reducer } from "./index"

/** general types*/
export type TReducer = ReturnType<typeof reducer>

export type TAppDispatch = typeof store.dispatch





