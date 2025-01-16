import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherChart = ({ data }) => {
  // In a real application, this would use historical or forecast data
  // For now, we'll create some sample data based on the current conditions
  const chartData = [
    { name: 'Now', temp: data.current.temp_c },
    { name: '+1h', temp: data.current.temp_c + Math.random() * 2 - 1 },
    { name: '+2h', temp: data.current.temp_c + Math.random() * 2 - 1 },
    { name: '+3h', temp: data.current.temp_c + Math.random() * 2 - 1 },
    { name: '+4h', temp: data.current.temp_c + Math.random() * 2 - 1 },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Temperature Trend
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              name="Temperature (°C)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default WeatherChart;
