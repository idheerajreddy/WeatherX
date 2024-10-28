// App.js
import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/weather?city=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-indigo-700 text-white">
      <h1 className="text-4xl font-bold mb-8">WeatherX</h1>
      <div className="flex space-x-4">
        <input
          type="text"
          className="px-4 py-2 rounded-lg text-gray-700 outline-none"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={getWeather}
          className="bg-gray-500transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Weather
        </button>
      </div>

      {weatherData && (
        <Weather 
          city={weatherData.name} 
          temperature={Math.round(weatherData.temperature)} 
          weather={weatherData.description} 
          icon={weatherData.icon} 
        />
      )}
    </div>
  );
};

export default App;

