// Weather API Service
// Using OpenWeatherMap API for Manama, Bahrain

const API_KEY = 'dedd900ac15c00c9c856d04dede5fa9f'; // Your working API key
const CITY = 'Manama,bh';

export const fetchWeatherData = async (language = 'en') => {
  try {
    // For demo purposes, using mock data
    // To use real API, uncomment the following code
    
    /*
    // Fetch current weather
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=${language}`
    );
    
    if (!currentResponse.ok) {
      throw new Error('Weather API request failed');
    }
    
    const currentData = await currentResponse.json();
    
    // Fetch 7-day forecast
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric&lang=${language}`
    );
    
    if (!forecastResponse.ok) {
      throw new Error('Forecast API request failed');
    }
    
    const forecastData = await forecastResponse.json();
    
    // Transform data to match our component structure
    const currentWeather = {
      dt: currentData.dt,
      main: { 
        temp: currentData.main.temp, 
        humidity: currentData.main.humidity, 
        feels_like: currentData.main.feels_like 
      },
      weather: currentData.weather,
      wind: { speed: currentData.wind.speed }
    };
    
    // Get daily forecasts (every 24 hours)
    const dailyForecasts = forecastData.list.filter((item, index) => index % 8 === 0).slice(1, 7);
    
    const forecastList = dailyForecasts.map(item => ({
      dt: item.dt,
      main: { 
        temp: item.main.temp, 
        humidity: item.main.humidity, 
        feels_like: item.main.feels_like 
      },
      weather: item.weather,
      wind: { speed: item.wind.speed }
    }));
    
    return {
      city: { name: currentData.name, country: currentData.sys.country },
      list: [currentWeather, ...forecastList]
    };
    */
    
    // Mock data for demonstration
    const mockData = {
      city: { name: 'Bahrain', country: 'BH' },
      list: [
        {
          dt: Date.now() / 1000,
          main: { temp: 32, humidity: 65, feels_like: 35 },
          weather: [{ main: 'Sunny', description: 'clear sky', icon: '01d' }],
          wind: { speed: 3.5 }
        },
        {
          dt: (Date.now() / 1000) + 86400,
          main: { temp: 30, humidity: 70, feels_like: 33 },
          weather: [{ main: 'Cloudy', description: 'scattered clouds', icon: '03d' }],
          wind: { speed: 4.2 }
        },
        {
          dt: (Date.now() / 1000) + 172800,
          main: { temp: 29, humidity: 75, feels_like: 32 },
          weather: [{ main: 'Rainy', description: 'light rain', icon: '10d' }],
          wind: { speed: 5.1 }
        },
        {
          dt: (Date.now() / 1000) + 259200,
          main: { temp: 31, humidity: 68, feels_like: 34 },
          weather: [{ main: 'Sunny', description: 'clear sky', icon: '01d' }],
          wind: { speed: 2.8 }
        },
        {
          dt: (Date.now() / 1000) + 345600,
          main: { temp: 33, humidity: 60, feels_like: 36 },
          weather: [{ main: 'Sunny', description: 'clear sky', icon: '01d' }],
          wind: { speed: 3.0 }
        },
        {
          dt: (Date.now() / 1000) + 432000,
          main: { temp: 30, humidity: 72, feels_like: 33 },
          weather: [{ main: 'Cloudy', description: 'broken clouds', icon: '04d' }],
          wind: { speed: 4.5 }
        },
        {
          dt: (Date.now() / 1000) + 518400,
          main: { temp: 28, humidity: 78, feels_like: 31 },
          weather: [{ main: 'Rainy', description: 'moderate rain', icon: '10d' }],
          wind: { speed: 6.2 }
        }
      ]
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return mockData;
  } catch (error) {
    console.error('Weather API error:', error);
    throw new Error('Failed to fetch weather data');
  }
};

// Instructions for setting up real weather API:
/*
1. The API key is already configured
2. Uncomment the fetch code above and comment out the mock data
3. The API will provide real weather data for Manama, Bahrain
4. Includes both current weather and 7-day forecast
*/ 