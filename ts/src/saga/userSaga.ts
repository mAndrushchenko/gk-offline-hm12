import { put, call, takeEvery } from 'redux-saga/effects'
import { request } from "../services/api/requests"
import { usersUrl } from "../services/api/url"
import { getUsers, setUsers } from "../store/userSlice"
import { TArrayUsersState, TUserState } from "../components/Users/users-types"

const fetchUserFromApi = () => request(usersUrl)

function* fetchUserWorker() {
    const data: any = yield call(fetchUserFromApi)
    const users: TArrayUsersState = data.map((user: any) => {
        const newUser: TUserState = {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website
        }
        return { ...newUser }
    })
    yield put(setUsers(users))
}

export function* userWatcher() {
    yield takeEvery(getUsers.type, fetchUserWorker)
}
