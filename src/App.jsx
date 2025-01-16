import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';
import Waves from './components/Waves';

function App() {
  return (
    <>
      <Waves 
        lineColor="rgba(25, 118, 210, 0.4)"
        backgroundColor="linear-gradient(180deg, #E3F2FD 0%, #90CAF9 100%)"
        waveSpeedX={0.0125}
        waveSpeedY={0.005}
        waveAmpX={32}
        waveAmpY={16}
      />
      <Box sx={{ 
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={{ mt: 2 }}>
          <Navbar />
        </Box>
        <Box sx={{ 
          flex: 1,
          py: 4,
          px: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Box sx={{ width: '100%', maxWidth: '800px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
