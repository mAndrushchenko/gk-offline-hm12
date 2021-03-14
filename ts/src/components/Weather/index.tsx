import React, { useState, useCallback, useEffect, FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getWeather, selectWeather } from "../../store/weatherSlice"
import { IWeatherState, TWeatherState } from "./weather-types"
import { TAppDispatch } from "../../store/store-types"
import { Card } from './Card'
import image from "../../css/weather-bg.jpg"

export const Weather: FC = () => {
    const dispatch = useDispatch<TAppDispatch>()
    const weather = useSelector<IWeatherState, TWeatherState>(selectWeather)
    const [res, setRes] = useState<TWeatherState | null>(null)

    const handleClick = useCallback(() => {
        dispatch(getWeather())
    }, [res])

    useEffect(() => setRes(weather), [weather])

    return (
        <div className="box">
            <img
                src={image}
                className="bg"
                alt=""
                draggable={false}
            />
            <div className="weather-wrapper">
                <div className="images-content">
                    <button
                        className="btn btn-images"
                        onClick={handleClick}>
                        Upload weather
                    </button>
                    {res && <Card weather={res}/>}
                </div>
            </div>
        </div>
    )
}