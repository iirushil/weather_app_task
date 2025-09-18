import React, { useState, useEffect } from "react";
import "./weather.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "../Assets/wind.png";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


//   const API_URL =
//     "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=wind_speed_10m,temperature_2m,relative_humidity_2m";


const API_URL = import.meta.env.VITE_WEATHER_URL; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const json = await res.json();     
        console.log("API data:", json);    
        setWeather(json.current);          
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

 
  if (loading) return <p className="weather">Loading...</p>;
  if (error) return <p className="weather">Error: {error}</p>;

  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="search" />
      </div>

      <img src={clear_icon} alt="icon" className="weather-icon" />

      <p className="temperature">
        {weather ? `${weather.temperature_2m} °C` : "--"}
      </p>
      <p className="location">Berlin (Lat 52.52, Lon 13.41)</p>

      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="humidity" />
          <div>
            <p>{weather ? `${weather.relative_humidity_2m}%` : "--"}</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind_icon} alt="wind" />
          <div>
            <p>{weather ? `${weather.wind_speed_10m} km/h` : "--"}</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

