import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Autocomplete,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  IconButton,
  Collapse,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { weatherService } from '../services/weatherService';
import { majorCities } from '../data/cities';
import WeatherBackground from './WeatherBackground';

const WeatherCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: theme.text,
  borderRadius: 16,
  boxShadow: theme.shadow,
  marginTop: 20,
  overflow: 'hidden',
  backdropFilter: 'blur(10px)',
}));

const WeatherIcon = styled('img')({
  width: 100,
  height: 100,
});

const Home = ({ unit }) => {
  const [searchValue, setSearchValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    if (!city) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const [currentWeather, forecast] = await Promise.all([
        weatherService.getCurrentWeather(city),
        weatherService.getForecast(city),
      ]);
      
      setWeatherData(currentWeather);
      setForecastData(forecast);
      
      // Update recent searches
      setRecentSearches(prev => {
        const newSearches = [city, ...prev.filter(s => s !== city)].slice(0, 5);
        return newSearches;
      });
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (condition) => {
    const iconCode = condition?.icon || '01d';
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const handleRefresh = () => {
    if (weatherData) {
      handleSearch(weatherData.name);
    }
  };

  return (
    <>
      {weatherData && (
        <WeatherBackground 
          condition={weatherData.weather[0].main} 
          onRefresh={handleRefresh}
        />
      )}
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Autocomplete
            freeSolo
            options={majorCities}
            value={searchValue}
            onChange={(event, newValue) => {
              setSearchValue(newValue);
              handleSearch(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search for a city"
                variant="outlined"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                  },
                }}
              />
            )}
          />
          
          {recentSearches.length > 0 && (
            <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {recentSearches.map((city) => (
                <Typography
                  key={city}
                  variant="caption"
                  sx={{
                    cursor: 'pointer',
                    color: 'primary.main',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                  onClick={() => handleSearch(city)}
                >
                  {city}
                </Typography>
              ))}
            </Box>
          )}
        </Box>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        {weatherData && (
          <WeatherCard>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" gutterBottom>
                    {weatherData.name}
                  </Typography>
                  <Typography variant="h2">
                    {Math.round(weatherData.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
                  </Typography>
                  <Typography variant="h6">
                    {weatherData.weather[0].description}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                  <WeatherIcon
                    src={getWeatherIcon(weatherData.weather[0])}
                    alt={weatherData.weather[0].description}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="body2">Wind Speed</Typography>
                    <Typography variant="h6">
                      {weatherData.wind.speed} m/s
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="body2">Humidity</Typography>
                    <Typography variant="h6">
                      {weatherData.main.humidity}%
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="body2">Visibility</Typography>
                    <Typography variant="h6">
                      {weatherData.visibility / 1000} km
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="body2">Pressure</Typography>
                    <Typography variant="h6">
                      {weatherData.main.pressure} hPa
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <IconButton
                  onClick={() => setExpanded(!expanded)}
                  sx={{
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Box>

              <Collapse in={expanded}>
                {forecastData && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      5-Day Forecast
                    </Typography>
                    <Grid container spacing={2}>
                      {forecastData.list
                        .filter((item, index) => index % 8 === 0)
                        .slice(0, 5)
                        .map((item) => (
                          <Grid item xs={12} sm={6} md={2.4} key={item.dt}>
                            <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}>
                              <CardContent>
                                <Typography variant="body2">
                                  {new Date(item.dt * 1000).toLocaleDateString()}
                                </Typography>
                                <WeatherIcon
                                  src={getWeatherIcon(item.weather[0])}
                                  alt={item.weather[0].description}
                                />
                                <Typography variant="h6">
                                  {Math.round(item.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
                                </Typography>
                                <Typography variant="body2">
                                  {item.weather[0].description}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                    </Grid>
                  </Box>
                )}
              </Collapse>
            </CardContent>
          </WeatherCard>
        )}
      </Container>
    </>
  );
};

export default Home; 