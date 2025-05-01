import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RefreshIcon from '@mui/icons-material/Refresh';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  color: '#333333',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
}));

const Navbar = ({ onRefresh }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
          }}
        >
          OpenWeather
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            color="inherit"
            onClick={onRefresh}
            size="large"
            sx={{ 
              border: '1px solid',
              borderColor: 'inherit',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              }
            }}
          >
            <RefreshIcon />
          </IconButton>

          <Button
            component={RouterLink}
            to="/news"
            color="inherit"
            variant="outlined"
            startIcon={<NewspaperIcon />}
          >
            Weather News
          </Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 