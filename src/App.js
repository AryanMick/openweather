import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import WeatherNews from './components/WeatherNews';
import Navbar from './components/Navbar';
import GlobalStyles from './styles/globalStyles';

const theme = {
  background: '#ffffff',
  text: '#333333',
  primary: '#2196f3',
  secondary: '#f50057',
  card: '#ffffff',
  shadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.primary,
    },
    secondary: {
      main: theme.secondary,
    },
  },
});

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Router>
          <div style={{ 
            minHeight: '100vh',
            backgroundColor: theme.background,
            color: theme.text,
          }}>
            <Navbar 
              onRefresh={handleRefresh}
            />
            <Routes>
              <Route path="/" element={<Home unit="imperial" refreshKey={refreshKey} />} />
              <Route path="/news" element={<WeatherNews />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
