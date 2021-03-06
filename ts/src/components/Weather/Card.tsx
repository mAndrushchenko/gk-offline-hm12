import React, { FC, useCallback } from "react"
import { IWeatherState } from "./weather-types"

export const Card: FC<IWeatherState> = ({ weather }) => {
    const weekDays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today: string = weekDays[new Date().getDay()]
    const {
        name,
        description,
        icon,
        temp,
        feels_like
    } = weather

    const kToC = useCallback((f: number): number => {
        return Math.round(f - 273)
    }, [weather])

    return (
        <div className="weathers-card">
            <h2>Current weather</h2>
            <h1>{name}</h1>
            <h2>{today}</h2>
            <h2><em>t </em>: {kToC(temp)}&deg;C</h2><h3>Feels like: {kToC(feels_like)}</h3>
            <img className="weather-img" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
            <h2>Condition: {description}</h2>
        </div>
    )
}