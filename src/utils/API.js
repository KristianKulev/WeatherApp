import axios from "axios";
import { baseUrl, API_KEY } from "../constants";
// NOTE: these mocks are usefull for testing
// import { MOCK_ForecastData, MOCK_WeatherData } from "../mocks/MOCK_DATA";

export const fetchWeather = (location, unit) => {
  return axios.get(
    `${baseUrl}/weather?q=${location}&appid=${API_KEY}&units=${unit}`
  );
};
export const fetchForecast = (location, unit) => {
  return axios.get(
    `${baseUrl}/forecast?q=${location}&appid=${API_KEY}&units=${unit}`
  );
};
