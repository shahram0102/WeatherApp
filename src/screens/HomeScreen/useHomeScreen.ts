import { useMutation } from "@tanstack/react-query";
import { debounce } from "lodash";
import { useState, useEffect, useCallback } from "react";
import useLocationApi from "src/api/location.api";
import useWeatherApi from "src/api/weather.api";

export default function useHomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const { getLocationEndPoint } = useLocationApi();
  const { forecastWeather } = useWeatherApi();
  const { mutate: mutateLocation, data: locations } = useMutation(
    ['locations'],
    (cityName: string) => getLocationEndPoint({ cityName }),
  );
  const {
    mutate: mutateWeather,
    data: weather,
    isLoading: loadingGetWeather,
  } = useMutation(
    ['locations'],
    (cityName: string) => forecastWeather({ cityName, days: 7 }),
    {
      onSuccess() {
        setShowSearch(false);
      },
    },
  );

  useEffect(() => {
    mutateWeather('mashhad');
  }, []);

  function onPress() {
    setShowSearch((state) => !state);
  }

  const handleSearch = (search: string) => {
    // console.log('value: ',search);
    if (search && search.length > 2) mutateLocation(search);
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const handleLocation = (loc: ILocation) => {
    mutateWeather(loc.name);
  };

  return ({
    showSearch,
    weather,
    locations,
    loadingGetWeather,
    handleLocation,
    handleTextDebounce,
    onPress
  }
  )
}
