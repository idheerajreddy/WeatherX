// Weather.js
import React from 'react';

const Weather = ({ city, temperature, weather, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 shadow-lg max-w-md w-full sm:max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">{city}</h1>
        <div className="flex items-center justify-center ">
          <img 
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
            alt={weather} 
            className="w-20 h-20"
          />
          <div className="text-center">
            <p className="text-6xl font-extrabold">{temperature}°C</p>
            <p className="capitalize text-lg mt-2">{weather}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
