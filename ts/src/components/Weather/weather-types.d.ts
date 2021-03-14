/** for Weather component */
export type TWeatherState = {
    name: string
    description: string
    icon: string
    temp: number
    feels_like: number
}

export interface IWeatherState {
    weather: TWeatherState
}