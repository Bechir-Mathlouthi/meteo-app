import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Search, Favorite, FavoriteBorder } from '@mui/icons-material';
import { useWeather } from '../contexts/WeatherContext';
import WeatherChart from '../components/WeatherChart';

const Dashboard = () => {
  const [location, setLocation] = useState('');
  const {
    weatherData,
    loading,
    error,
    favorites,
    fetchWeatherData,
    addToFavorites,
    removeFromFavorites,
  } = useWeather();

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim()) {
      fetchWeatherData(location);
    }
  };

  const isFavorite = favorites.includes(location);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(location);
    } else {
      addToFavorites(location);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
      <form onSubmit={handleSearch}>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter city name or coordinates"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={loading}
                      sx={{ height: '100%', borderRadius: '0 4px 4px 0' }}
                    >
                      <Search />
                    </Button>
                  </InputAdornment>
                ),
                sx: { pr: 0 }
              }}
            />
          </Grid>
        </Grid>
      </form>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {weatherData && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h5" component="h2">
                    {weatherData.location.name}, {weatherData.location.country}
                  </Typography>
                  <IconButton onClick={toggleFavorite}>
                    {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
                  </IconButton>
                </Box>
                <Typography variant="h3" sx={{ my: 2 }}>
                  {weatherData.current.temp_c}°C
                </Typography>
                <Typography color="textSecondary">
                  Feels like: {weatherData.current.feelslike_c}°C
                </Typography>
                <Typography color="textSecondary">
                  Condition: {weatherData.current.condition.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography color="textSecondary">Humidity</Typography>
                    <Typography>{weatherData.current.humidity}%</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color="textSecondary">Wind Speed</Typography>
                    <Typography>{weatherData.current.wind_kph} km/h</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color="textSecondary">Pressure</Typography>
                    <Typography>{weatherData.current.pressure_mb} mb</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color="textSecondary">UV Index</Typography>
                    <Typography>{weatherData.current.uv}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <WeatherChart data={weatherData} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Dashboard;
