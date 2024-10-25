import React, { useState } from "react";
import { fetchWeather, fetchForecast } from "./utils/API";
import Forecast from "./components/Forecast";
import Weather from "./components/Weather";
import Search from "./components/Search";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric"); // Default to Celsius

  const fetchWeatherData = async (location, unit) => {
    setIsLoading(true);
    setError("");

    try {

      const weatherResults = await Promise.all([
        fetchWeather(location, unit),
        fetchForecast(location, unit)
      ]);

      setWeatherData(weatherResults[0].data);
      setForecastData(weatherResults[1].data.list.slice(0, 5));

    } catch (error) {
      setError("Could not fetch weather data. Please try again.");
    }
    setIsLoading(false);
  };

  const toggleUnits = async () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";

    await fetchWeatherData(city, newUnit);

    setUnit(newUnit);
  };

  return (
    <div className="bg-blue-100 flex flex-col items-center justify-center h-screen py-12">
      <header className="bg-white p-6 rounded shadow w-5/6 lg:w-1/2 mb-6">
        <h1 className="text-2xl font-bold text-center mb-4">Weather App</h1>

        {/* Search Bar */}
        <Search
          onSearch={() => fetchWeatherData(city, unit)}
          onError={setError}
          onInput={setCity}
          inputVal={city}
          isLoading={isLoading}
        />
        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {/* Loading State */}
        {isLoading && <p className="text-center">Loading...</p>}
      </header>{" "}
      {weatherData && (
        <section className="flex flex-auto flex-col p-6 min-h-0 bg-white rounded shadow w-5/6 lg:w-1/2">
          {/* Weather Display */}
          <Weather
            data={weatherData}
            unit={unit}
            toggleUnits={toggleUnits}
            isLoading={isLoading}
          />

          {/* Forecast Display */}
          {forecastData && <Forecast data={forecastData} unit={unit} />}
        </section>
      )}
    </div>
  );
}

export default App;
