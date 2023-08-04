import { WEATHER_API_KEY } from '@env';
import { useCallback } from "react";
import { api } from "./config/axios.config";

export interface ILocationParams {
  cityName: string;
}

export default function useLocationApi() {
  const getLocationEndPoint = useCallback(async ({ cityName }: ILocationParams) => {
    const res = await api.get<Array<ILocation>>(`/search.json?key=${WEATHER_API_KEY}&q=${cityName}`
    );
    return res.data;
  }, []);

  return { getLocationEndPoint };
}