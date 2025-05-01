import React from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import WarningIcon from '@mui/icons-material/Warning';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const NewsCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  marginBottom: 16,
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const WeatherNews = () => {
  const weatherNews = [
    {
      date: 'April 28, 2024',
      title: 'Severe Thunderstorms Sweep Across Midwest',
      description: 'Multiple states experience severe weather conditions with hail and strong winds.',
      severity: 'warning',
      location: 'Midwest, USA',
    },
    {
      date: 'April 25, 2024',
      title: 'Record-Breaking Heat Wave in Southeast Asia',
      description: 'Temperatures reach unprecedented levels across multiple countries.',
      severity: 'severe',
      location: 'Southeast Asia',
    },
    {
      date: 'April 22, 2024',
      title: 'Heavy Rainfall Causes Flooding in Western Europe',
      description: 'Several regions experience severe flooding due to continuous rainfall.',
      severity: 'warning',
      location: 'Western Europe',
    },
    {
      date: 'April 20, 2024',
      title: 'Tornado Outbreak in Central Plains',
      description: 'Multiple tornadoes reported across several states.',
      severity: 'severe',
      location: 'Central Plains, USA',
    },
    {
      date: 'April 18, 2024',
      title: 'Unusual Snowfall in Northern Regions',
      description: 'Late-season snow affects transportation and daily activities.',
      severity: 'warning',
      location: 'Northern Hemisphere',
    },
    {
      date: 'April 15, 2024',
      title: 'Drought Conditions Worsen in Southwest',
      description: 'Water restrictions implemented in affected areas.',
      severity: 'severe',
      location: 'Southwest USA',
    },
    {
      date: 'April 12, 2024',
      title: 'Coastal Flooding Along Eastern Seaboard',
      description: 'High tides and storm surge cause flooding in coastal communities.',
      severity: 'warning',
      location: 'Eastern USA',
    },
    {
      date: 'April 10, 2024',
      title: 'Wildfire Risk Increases in Western States',
      description: 'Dry conditions and high winds create dangerous fire conditions.',
      severity: 'severe',
      location: 'Western USA',
    },
    {
      date: 'April 8, 2024',
      title: 'Tropical Storm Forms in Atlantic',
      description: 'Early season tropical storm develops off the coast of Africa.',
      severity: 'warning',
      location: 'Atlantic Ocean',
    },
    {
      date: 'April 5, 2024',
      title: 'Air Quality Alert in Major Cities',
      description: 'Poor air quality affects urban areas due to weather conditions.',
      severity: 'warning',
      location: 'Global Urban Centers',
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'severe':
        return '#f44336';
      case 'warning':
        return '#ff9800';
      default:
        return '#2196f3';
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4 }}>
        Weather News & Alerts
      </Typography>
      
      {weatherNews.map((news, index) => (
        <NewsCard key={index}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <CalendarTodayIcon sx={{ color: 'text.secondary' }} />
                  <Typography variant="subtitle2" color="text.secondary">
                    {news.date}
                  </Typography>
                  <Chip
                    label={news.severity}
                    size="small"
                    sx={{
                      backgroundColor: getSeverityColor(news.severity),
                      color: 'white',
                      ml: 'auto',
                    }}
                  />
                </Box>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  {news.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {news.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <WarningIcon sx={{ color: getSeverityColor(news.severity) }} />
                  <Typography variant="body2" color="text.secondary">
                    Location: {news.location}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </NewsCard>
      ))}
    </Container>
  );
};

export default WeatherNews; 