import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try the OneCall API first
        let response = await fetch(
          'https://api.openweathermap.org/data/2.5/onecall?lat=26.0657&lon=50.5076&exclude=minutely,hourly,alerts&units=metric&appid=dedd900ac15c00c9c856d04dede5fa9f'
        );

        // If OneCall fails, try the working weather API
        if (!response.ok) {
          console.log('OneCall API failed, trying weather API...');
          response = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=Manama,bh&appid=dedd900ac15c00c9c856d04dede5fa9f&units=metric'
          );
        }

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Weather API request failed: ${errorData.message || response.statusText}`);
        }

        const data = await response.json();
        console.log('Weather API response:', data); // Debug log
        
        // Transform data if it's from the weather API (not OneCall)
        if (data.current === undefined && data.main !== undefined) {
          // This is from the weather API, transform it to match OneCall structure
          const transformedData = {
            current: {
              temp: data.main.temp,
              feels_like: data.main.feels_like,
              humidity: data.main.humidity,
              weather: data.weather,
              dt: data.dt
            },
            daily: [] // No daily forecast from weather API
          };
          setWeatherData(transformedData);
        } else {
          setWeatherData(data);
        }
      } catch (err) {
        setError(`Failed to load weather data: ${err.message}`);
        console.error('Weather API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      '01d': '☀️',
      '01n': '🌙',
      '02d': '⛅',
      '02n': '☁️',
      '03d': '☁️',
      '03n': '☁️',
      '04d': '☁️',
      '04n': '☁️',
      '09d': '🌧️',
      '09n': '🌧️',
      '10d': '🌦️',
      '10n': '🌧️',
      '11d': '⛈️',
      '11n': '⛈️',
      '13d': '❄️',
      '13n': '❄️',
      '50d': '🌫️',
      '50n': '🌫️'
    };
    return iconMap[iconCode] || '🌤️';
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  const getDayOfWeek = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  if (loading) {
    return (
      <div className="weather-app">
        <div className="weather-container">
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading weather data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-app">
        <div className="weather-container">
          <div className="error">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div className="weather-app">
      <div className="weather-container">
        <h1 className="weather-title">Zallaq Weather</h1>
        
        {/* Current Weather */}
        <div className="current-weather">
          <div className="current-icon">
            {getWeatherIcon(weatherData.current.weather[0].icon)}
          </div>
          <div className="current-details">
            <div className="current-temp">
              {Math.round(weatherData.current.temp)}°C
            </div>
            <div className="current-desc">
              {weatherData.current.weather[0].description}
            </div>
            <div className="current-feels">
              Feels like {Math.round(weatherData.current.feels_like)}°C
            </div>
          </div>
        </div>

        {/* 7-Day Forecast */}
        {weatherData.daily && weatherData.daily.length > 0 && (
          <div className="forecast-section">
            <h2 className="forecast-title">7-Day Forecast</h2>
            <div className="forecast-cards">
              {weatherData.daily.slice(1, 8).map((day, index) => (
                <div key={index} className="forecast-card">
                  <div className="forecast-date">
                    {getDayOfWeek(day.dt)}
                  </div>
                  <div className="forecast-icon">
                    {getWeatherIcon(day.weather[0].icon)}
                  </div>
                  <div className="forecast-temp">
                    {Math.round(day.temp.day)}°C
                  </div>
                  <div className="forecast-details">
                    <div className="detail-item">
                      <span className="detail-label">Humidity</span>
                      <span className="detail-value">{day.humidity}%</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Wind</span>
                      <span className="detail-value">{day.wind_speed} m/s</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp; 