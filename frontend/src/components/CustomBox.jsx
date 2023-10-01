import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../assets/todoloLogo.png';

function CustomBox({ height, width, buttonText, paddingB, children }) {
	const xsHeight = `calc(${height} * 0.9)`;
	const xsWidth = `calc(${width} * 3.2)`;
  return (
    <Box
      sx={{
        height: { xs: xsHeight, sm: height }, // Adjust height for different breakpoints
        width: {
					xs: xsWidth,
					sm: width,
				}, // Adjust width for different breakpoints
        margin: 'auto',
        marginTop: { xs: '35%', sm: '7%' }, // Adjust margin-top for different breakpoints
        paddingBottom: paddingB ? paddingB : 0,
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '3px solid #34C4B5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '70%', sm: '70%' }, // Adjust width for different breakpoints
          borderBottom: '2px solid #34C4B5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={logo} style={{ width: '60%', height: 'auto', maxWidth: '200px', maxHeight: '150px' }} />
      </Box>
      {children}
      <Button
        variant="contained"
        sx={{
          color: 'white',
          backgroundColor: '#155360',
          borderRadius: '10px',
          fontSize: { xs: '0.9rem', sm: '0.7rem', md: '1rem' }, // Adjust font size for different breakpoints
          '&:hover': {
            backgroundColor: 'rgba(52, 196, 181, 1)',
          },
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
}

export default CustomBox;
