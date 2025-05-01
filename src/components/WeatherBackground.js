import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import RefreshIcon from '@mui/icons-material/Refresh';

const BackgroundContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  transition: 'opacity 0.5s ease-in-out',
});

const BackgroundImage = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.3,
});

const RefreshButton = styled('button')({
  position: 'fixed',
  top: '20px',
  right: '20px',
  padding: '12px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.2s, background-color 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});

const getWeatherImage = (condition) => {
  const images = {
    Clear: [
      'https://images.unsplash.com/photo-1601297183305-6df142704ea2',
      'https://images.unsplash.com/photo-1590077428593-a55bb07c4665',
      'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5',
    ],
    Rain: [
      'https://images.unsplash.com/photo-1519692933481-e162a57d6721',
      'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0',
      'https://images.unsplash.com/photo-1518803194621-27188ba362c9',
    ],
    Snow: [
      'https://images.unsplash.com/photo-1491002052546-bf38f186af56',
      'https://images.unsplash.com/photo-1516431883659-655d5420c6f4',
      'https://images.unsplash.com/photo-1511131341542-3c20af54a0c3',
    ],
    Clouds: [
      'https://images.unsplash.com/photo-1534088568595-a066f410bcda',
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f',
      'https://images.unsplash.com/photo-1505533321630-975218a5f66f',
    ],
    Thunderstorm: [
      'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28',
      'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0',
      'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e',
    ],
    Drizzle: [
      'https://images.unsplash.com/photo-1541919329513-35f7af297129',
      'https://images.unsplash.com/photo-1556485689-33e55ab56127',
      'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0',
    ],
    Mist: [
      'https://images.unsplash.com/photo-1543968996-ee822b8176ba',
      'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227',
      'https://images.unsplash.com/photo-1487621167305-5d248087c724',
    ],
    Default: [
      'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9',
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
      'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17',
    ],
  };

  // Get the array of images for the condition or default
  const imageArray = images[condition] || images.Default;
  // Return a random image from the array
  return imageArray[Math.floor(Math.random() * imageArray.length)];
};

const WeatherBackground = ({ condition, onRefresh }) => {
  const imageUrl = getWeatherImage(condition);

  return (
    <>
      <BackgroundContainer>
        <BackgroundImage
          style={{
            backgroundImage: `url(${imageUrl}?auto=format&fit=crop&w=1920&q=80)`,
          }}
        />
      </BackgroundContainer>
      <RefreshButton onClick={onRefresh} title="Refresh weather data">
        <RefreshIcon />
      </RefreshButton>
    </>
  );
};

export default WeatherBackground; 