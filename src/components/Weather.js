import React from "react";

function Weather({ data, toggleUnits, unit, isLoading }) {
  return (
    <div className="text-center mb-4">
      <header className="flex justify-between">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        {/* Unit Toggle */}
        <div className="text-center">
          <button
            disabled={isLoading}
            onClick={toggleUnits}
            className="px-2 py-2 text-sm text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Switch to {unit === "metric" ? "F" : "C"}
          </button>
        </div>
      </header>
      <article>
        <section className="flex items-center">
          <h3 className="text-xl mr-4">
            {Math.round(data.main.temp)}°{unit === "metric" ? "C" : "F"}
          </h3>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="w-8 h-8"
          />
        </section>
        <p className="capitalize text-start">{data.weather[0].description}</p>
      </article>
    </div>
  );
}

export default Weather;
