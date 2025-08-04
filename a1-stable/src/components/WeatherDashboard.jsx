import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingSpinner from './LoadingSpinner';
import { fetchWeatherData } from '../services/weatherService';
import './WeatherDashboard.css';

const WeatherDashboard = () => {
  const { t, i18n } = useTranslation();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await fetchWeatherData(i18n.language === 'ar' ? 'ar' : 'en');
        setWeatherData(data);
      } catch (err) {
        setError('Failed to load weather data');
        console.error('Weather API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [i18n.language]);

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
    return date.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US', options);
  };

  if (loading) {
    return (
      <section className="weather-section">
        <div className="weather-container">
          <h2 className="weather-title">
            {i18n.language === 'ar' ? 'طقس البحرين' : 'Bahrain Weather'}
          </h2>
          <div className="weather-loading">
            <LoadingSpinner size="medium" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="weather-section">
        <div className="weather-container">
          <h2 className="weather-title">
            {i18n.language === 'ar' ? 'طقس البحرين' : 'Bahrain Weather'}
          </h2>
          <div className="weather-error">
            <span>{error}</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="weather-section">
      <div className="weather-container">
        <h2 className="weather-title">
          {i18n.language === 'ar' ? 'طقس البحرين' : 'Bahrain Weather'}
        </h2>
        
        <div className="weather-current">
          <div className="current-weather">
            <div className="current-icon">
              {getWeatherIcon(weatherData.list[0].weather[0].icon)}
            </div>
            <div className="current-details">
              <div className="current-temp">
                {Math.round(weatherData.list[0].main.temp)}°C
              </div>
              <div className="current-desc">
                {weatherData.list[0].weather[0].description}
              </div>
              <div className="current-feels">
                {i18n.language === 'ar' ? 'يشعر بـ' : 'Feels like'} {Math.round(weatherData.list[0].main.feels_like)}°C
              </div>
            </div>
          </div>
        </div>

        <div className="weather-forecast">
          <h3 className="forecast-title">
            {i18n.language === 'ar' ? 'توقعات الأسبوع' : '7-Day Forecast'}
          </h3>
          <div className="forecast-cards">
            {weatherData.list.map((day, index) => (
              <div key={index} className="forecast-card">
                <div className="forecast-date">
                  {formatDate(day.dt)}
                </div>
                <div className="forecast-icon">
                  {getWeatherIcon(day.weather[0].icon)}
                </div>
                <div className="forecast-temp">
                  {Math.round(day.main.temp)}°C
                </div>
                <div className="forecast-desc">
                  {day.weather[0].description}
                </div>
                <div className="forecast-details">
                  <div className="detail-item">
                    <span className="detail-label">
                      {i18n.language === 'ar' ? 'رطوبة' : 'Humidity'}
                    </span>
                    <span className="detail-value">{day.main.humidity}%</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">
                      {i18n.language === 'ar' ? 'رياح' : 'Wind'}
                    </span>
                    <span className="detail-value">{day.wind.speed} m/s</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherDashboard; 