import React, { useState } from 'react';
import weatherCSS from './../Weather/Weather.module.css'; 

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'd7f2e8c4711544a504b035ffada11e0d';

  const fetchWeather = () => {
    if (!location) return;

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`)
      .then((res) => res.json())
      .then((geoData) => {
        if (geoData.length === 0) {
          setError('City not found');
          setWeather(null);
          return;
        }

        const { lat, lon } = geoData[0];

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
          .then((res) => res.json())
          .then((data) => {
            if (data.cod === "200") {
              setWeather(data);
              setError('');
            } else {
              setWeather(null);
              setError('Weather data not found.');
            }
          })
          .catch(() => {
            setWeather(null);
            setError('Failed to fetch weather data.');
          });
      })
      .catch(() => {
        setWeather(null);
        setError('Failed to fetch coordinates.');
      });
  };

  return (
    <div className={weatherCSS.Weather_wrapper}>
      <input
        type="text"
        placeholder="Enter city name"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p className="error-message">{error}</p>}

      {weather && (
        <div className={weatherCSS.Weather_info}>
          <h3>{weather.city.name}, {weather.city.country}</h3>
          <p><strong>Upcoming Forecasts:</strong></p>

          {weather.list.slice(0, 3).map((forecast, index) => (
            <div key={index} className={weatherCSS.Weather_forecast}>
              <p><strong>{new Date(forecast.dt * 1000).toLocaleString()}</strong></p>
              <p>Temp: {forecast.main.temp}°C</p>
              <p>Weather: {forecast.weather[0].description}</p>
              <p>Humidity: {forecast.main.humidity}%</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
