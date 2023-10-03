// Import necessary dependencies and styles
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import LandingPageStyles from '../styles/LandingPageStyles';

function LandingPage() {
  return (
    <>
      {/* Apply LandingPageStyles */}
      <LandingPageStyles />
      <Box
        sx={{
          height: '100vh', // Change height to 100vh for full viewport height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Center vertically and horizontally
          padding: '2rem', // Add some padding for spacing
          marginTop: '6rem',
          textAlign: 'center', // Center text
        }}
      >
        {/* Main heading */}
        <Typography
          variant='h1'
          className='lilitaOne'
          sx={{
            color: '#155360',
            fontSize: { xs: '1.8rem', sm: '3rem', md: '4rem' }, // Adjust font size for different breakpoints
            marginBottom: { xs: '1rem', sm: '2rem', md: '3rem' }, // Adjust margin for different breakpoints
          }}
        >
          TODOLO.ORGANIZE.THRIVE!
        </Typography>
        {/* Subheading */}
        <Typography
          variant='h5'
          sx={{
            color: '#155360',
            fontSize: { xs: '1.3rem', sm: '2rem', md: '2.5rem' }, // Adjust font size for different breakpoints
            marginBottom: { xs: '0.4rem', sm: '2rem', md: '3rem' }, // Adjust margin for different breakpoints
          }}
        >
          Organize Like a Pro
        </Typography>
        {/* Link to sign-up page */}
        <Link to='/signup' style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              color: 'white',
              backgroundColor: '#155360',
              borderRadius: '10px',
              marginTop: '1rem', // Add some top margin for spacing
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Adjust font size for different breakpoints
              '&:hover': {
                backgroundColor: 'rgba(52, 196, 181, 1)',
              },
            }}
          >
            Get Started
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default LandingPage;
