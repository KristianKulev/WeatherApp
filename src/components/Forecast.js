import React from "react";

function Forecast({ data = [], unit }) {
  return (
    <div className="flex flex-col flex-auto min-h-0">
      <h2 className="text-xl font-semibold text-center mb-4">Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-2 overflow-auto">
        {data.map((day, index) => (
          <div
            key={index}
            className="p-4 bg-blue-200 rounded-lg text-center shadow-md"
          >
            <h4 className="font-semibold">
              {new Date(day.dt * 1000).toLocaleDateString()}
            </h4>
            <p>
              {Math.round(day.main.temp)}°{unit === "metric" ? "C" : "F"}
            </p>
            <p className="capitalize">{day.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
