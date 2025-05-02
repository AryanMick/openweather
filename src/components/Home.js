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
  Paper,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { weatherService } from '../services/weatherService';
import { majorCities } from '../data/cities';
import WeatherBackground from './WeatherBackground';
import { weatherTips, weatherFacts } from '../data/weatherTipsAndFacts';

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

const InfoBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled('button')({
  padding: '12px 24px',
  fontSize: '1rem',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  cursor: 'pointer',
  transition: 'transform 0.2s, background-color 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});

const Home = ({ unit }) => {
  const [searchValue, setSearchValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentFact, setCurrentFact] = useState('');

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

  // Rotate weather facts every 10 seconds
  useEffect(() => {
    const getRandomFact = () => {
      const randomIndex = Math.floor(Math.random() * weatherFacts.length);
      setCurrentFact(weatherFacts[randomIndex]);
    };

    getRandomFact(); // Initial fact
    const interval = setInterval(getRandomFact, 10000);

    return () => clearInterval(interval);
  }, []);

  const getRelevantTips = (weatherCondition) => {
    if (!weatherCondition) return [];
    // Match the main weather condition to our tips categories
    const condition = Object.keys(weatherTips).find(key => 
      weatherCondition.toLowerCase().includes(key.toLowerCase())
    );
    return weatherTips[condition] || weatherTips['Clear']; // Default to Clear weather tips
  };

  const generateNewFact = () => {
    const randomIndex = Math.floor(Math.random() * weatherFacts.length);
    setCurrentFact(weatherFacts[randomIndex]);
  };

  const generateNewTips = () => {
    if (weatherData) {
      const tips = getRelevantTips(weatherData.weather[0].main);
      // Re-render tips by updating weather data
      setWeatherData({...weatherData});
    }
  };

  return (
    <Box sx={{ 
      backgroundColor: 'rgba(176, 224, 255, 0.3)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {weatherData && (
        <WeatherBackground 
          condition={weatherData.weather[0].main}
          onRefresh={handleRefresh}
        />
      )}
      <Container maxWidth="lg" sx={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Center search section */}
        <Box sx={{ 
          flex: weatherData ? 'none' : 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: weatherData ? 'flex-start' : 'center',
          pt: weatherData ? 4 : 0,
        }}>
          <Box sx={{ maxWidth: 600, width: '100%', mx: 'auto' }}>
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
              <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
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

            {error && (
              <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
                {error}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Weather data section */}
        {weatherData && (
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={8}>
              <WeatherCard>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                      <Typography variant="h4" gutterBottom>
                        {weatherData.name}
                      </Typography>
                      <Typography variant="h2">
                        {Math.round(weatherData.main.temp)}°C
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
                                      {Math.round(item.main.temp)}°C
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
            </Grid>

            <Grid item xs={12} md={4}>
              <InfoBox elevation={3}>
                <Typography variant="h6" gutterBottom>
                  Weather Tips
                </Typography>
                {getRelevantTips(weatherData.weather[0].main).map((tip, index) => (
                  <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                    • {tip}
                  </Typography>
                ))}
              </InfoBox>

              <InfoBox elevation={3}>
                <Typography variant="h6" gutterBottom>
                  Did You Know?
                </Typography>
                <Typography variant="body2">
                  {currentFact}
                </Typography>
              </InfoBox>
            </Grid>
          </Grid>
        )}

        {/* Welcome message when no weather data */}
        {!weatherData && (
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <InfoBox elevation={3} sx={{ display: 'inline-block', minWidth: 300 }}>
              <Typography variant="h5" gutterBottom>
                Welcome to OpenWeather
              </Typography>
              <Typography variant="body1">
                Search for a city above to get detailed weather information, helpful tips, and interesting weather facts!
              </Typography>
            </InfoBox>
          </Box>
        )}

        {/* Bottom buttons */}
        <Box sx={{ 
          mt: 'auto', 
          pt: 4,
          pb: 2,
          display: 'flex', 
          justifyContent: 'space-between'
        }}>
          <StyledButton onClick={generateNewFact}>
            Generate Weather Facts
          </StyledButton>
          <StyledButton onClick={generateNewTips}>
            Generate Weather Tips
          </StyledButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 