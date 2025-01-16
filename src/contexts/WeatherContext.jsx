import React, { createContext, useState, useContext, useCallback } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const fetchWeatherData = useCallback(async (location) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
        params: {
          key: 'f20a6378c7334536aa3152505251501',
          q: location
        }
      });
      setWeatherData(response.data);
    } catch (err) {
      setError(err.response?.data?.error?.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  }, []);

  const addToFavorites = useCallback((location) => {
    setFavorites(prev => {
      const newFavorites = [...prev, location];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const removeFromFavorites = useCallback((location) => {
    setFavorites(prev => {
      const newFavorites = prev.filter(fav => fav !== location);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const value = {
    weatherData,
    loading,
    error,
    favorites,
    fetchWeatherData,
    addToFavorites,
    removeFromFavorites
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};
