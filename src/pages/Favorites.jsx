import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import { Delete, Refresh } from '@mui/icons-material';
import { useWeather } from '../contexts/WeatherContext';

const Favorites = () => {
  const { favorites, removeFromFavorites, fetchWeatherData } = useWeather();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Favorite Locations
      </Typography>
      <Card>
        <CardContent>
          <List>
            {favorites.length === 0 ? (
              <ListItem>
                <ListItemText primary="No favorite locations added yet" />
              </ListItem>
            ) : (
              favorites.map((location) => (
                <ListItem key={location}>
                  <ListItemText primary={location} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="refresh"
                      onClick={() => fetchWeatherData(location)}
                      sx={{ mr: 1 }}
                    >
                      <Refresh />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeFromFavorites(location)}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            )}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Favorites;
