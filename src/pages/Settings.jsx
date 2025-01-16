import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const Settings = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Card>
        <CardContent>
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Temperature in Celsius"
            />
            <FormControlLabel
              control={<Switch />}
              label="Enable Notifications"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Auto-refresh Data"
            />
          </FormGroup>
          <Box sx={{ mt: 3 }}>
            <FormControl fullWidth>
              <InputLabel>Update Frequency</InputLabel>
              <Select
                value={30}
                label="Update Frequency"
              >
                <MenuItem value={15}>Every 15 minutes</MenuItem>
                <MenuItem value={30}>Every 30 minutes</MenuItem>
                <MenuItem value={60}>Every hour</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;
