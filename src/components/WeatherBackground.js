import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const WeatherAnimation = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  overflow: 'hidden',
  backgroundImage: 'url("/weather-collage.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.7,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.4)',
  },
}));

const WeatherBackground = () => {
  return <WeatherAnimation />;
};

export default WeatherBackground; 