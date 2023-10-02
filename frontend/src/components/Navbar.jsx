import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import PersonIcon from '@mui/icons-material/Person';

const pages = [
  { label: 'Home', url: '/' },
  { label: 'Help', url: '/help' },
  { label: 'Our Team', url: '/about' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    // Check if the current URL is "/todo" and set isLoggedIn to true accordingly
    if (window.location.pathname === '/todo' || window.location.pathname === '/profile') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#BEF7F1' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.url}
                sx={{
                  my: 2,
                  color: '#155360',
                  display: 'block',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
              // Render Avatar with circle when user is logged in
              <Tooltip title="User Menu">
                <IconButton
                  color="inherit"
                  aria-label="User Menu"
                  aria-controls="user-menu"
                  aria-haspopup="true"
                >
                  <Avatar
                    sx={{
                      backgroundColor: '#155360',
                    }}
                  >
                    <PersonIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
            ) : (
              // Render "Login" button when user is not logged in
              <Button
                variant="contained"
                component={Link}
                to={'/login'}
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  color: '#155360',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'rgba(52, 196, 181, 0.6)',
                  },
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

