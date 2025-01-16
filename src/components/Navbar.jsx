import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: 'rgba(25, 118, 210, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          width: 'auto',
          minWidth: '800px',
          borderRadius: '0 0 8px 8px'
        }}
      >
        <Box sx={{ px: 8 }}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: '#ffffff',
                fontWeight: 700,
                marginRight: 8,
                '&:hover': {
                  color: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              MeteoExplorer
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Button
                component={RouterLink}
                to="/favorites"
                sx={{ 
                  color: '#ffffff',
                  fontWeight: 500,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Favorites
              </Button>
              <Button
                component={RouterLink}
                to="/settings"
                sx={{ 
                  color: '#ffffff',
                  fontWeight: 500,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Settings
              </Button>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
