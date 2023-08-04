import { WEATHER_API_KEY } from '@env';
import { useCallback } from "react";
import { api } from "./config/axios.config";

export interface IForecastWeatherParams {
  cityName: string;
  days: number;
}

export default function useWeatherApi() {
  const forecastWeather = useCallback(async ({ cityName, days }: IForecastWeatherParams) => {
    const res = await api.get<IWeatherForecast>(`/forecast.json?key=${WEATHER_API_KEY}&q=${cityName}&days=${days}`
    );
    return res.data;
  }, []);

  return { forecastWeather };
}