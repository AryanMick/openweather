import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import WarningIcon from '@mui/icons-material/Warning';
import { weatherService } from '../services/weatherService';

const AlertCard = styled(Card)(({ theme, severity }) => ({
  backgroundColor: theme.card,
  color: theme.text,
  borderRadius: 16,
  boxShadow: theme.shadow,
  marginBottom: 16,
  borderLeft: `4px solid ${
    severity === 'warning'
      ? '#ff9800'
      : severity === 'severe'
      ? '#f44336'
      : '#2196f3'
  }`,
}));

const WeatherAlerts = ({ unit }) => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        // For demo purposes, we'll use New York's coordinates
        const alerts = await weatherService.getWeatherAlerts(40.7128, -74.006);
        setAlerts(alerts);
      } catch (err) {
        setError('Failed to fetch weather alerts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'warning':
        return '#ff9800';
      case 'severe':
        return '#f44336';
      default:
        return '#2196f3';
    }
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography>Loading alerts...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  if (alerts.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h6" gutterBottom>
          No active weather alerts
        </Typography>
        <Typography color="text.secondary">
          There are currently no severe weather alerts in your area.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Weather Alerts
      </Typography>
      
      {alerts.map((alert, index) => (
        <AlertCard key={index} severity={alert.severity}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <WarningIcon sx={{ color: getSeverityColor(alert.severity) }} />
                  <Typography variant="h6">{alert.event}</Typography>
                  <Chip
                    label={alert.severity}
                    size="small"
                    sx={{
                      backgroundColor: getSeverityColor(alert.severity),
                      color: 'white',
                    }}
                  />
                </Box>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="body1" paragraph>
                  {alert.description}
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  Affected Areas: {alert.areas}
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  Issued: {new Date(alert.start * 1000).toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expires: {new Date(alert.end * 1000).toLocaleString()}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </AlertCard>
      ))}
    </Container>
  );
};

export default WeatherAlerts; 