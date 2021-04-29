import React, { useState, useCallback, useEffect, FC } from "react"
import { IUsersState, TArrayUsersState } from "./users-types"
import { getUsers, selectUser } from "../../store/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { TAppDispatch } from "../../store/store-types"
import { User } from './User'

export const Users: FC = () => {
    const users = useSelector<IUsersState, TArrayUsersState>(selectUser)
    const dispatch = useDispatch<TAppDispatch>()
    const [res, setRes] = useState<TArrayUsersState | null>(null)

    const handleClick = useCallback(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => setRes(users), [users])

    return (
        <div className="box box-users">
            <img
                src={process.env.PUBLIC_URL + '/list-bg.jpg'}
                draggable={false}
                className="bg"
                alt=""
            />
            <div className="users-wrapper">
                <div className="users-content">
                    <div className="btn-wrapper btn-wrapper-users">
                        <button
                            className="btn btn-users"
                            onClick={handleClick}>
                            Upload users
                        </button>
                    </div>
                    <div className="users-cards">
                        {res && res.map((user) => {
                            return <User user={user} key={user.id}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


