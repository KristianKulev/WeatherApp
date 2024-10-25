import axios from "axios";
import { baseUrl, API_KEY } from "../constants";
// NOTE: these mocks are usefull for testing
// import { MOCK_ForecastData, MOCK_WeatherData } from "../mocks/MOCK_DATA";

export const fetchWeather = async (location, unit) => {
  return axios.get(
    `${baseUrl}/weather?q=${location}&appid=${API_KEY}&units=${unit}`
  );
};
export const fetchForecast = async (location, unit) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=${unit}`
  );
};
