import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../assets/TODOLO_final.png';

// Define a functional component named 'CustomBox' that accepts various props.
function CustomBox({ height, width, buttonText, paddingB, onButtonClick, children }) {
  // Calculate height and width for extra-small (xs) and small (sm) screen breakpoints.
  const xsHeight = `calc(${height} * 0.9)`;
  const xsWidth = `calc(${width} * 3.2)`;

  // Define a function 'handleClick' to handle button clicks.
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  // Render a custom box with dynamic styles based on provided props.
  return (
    <Box
      id='customBoxOuter'
      sx={{
        // Define styles for the custom box.
        height: { xs: xsHeight, sm: height }, // Adjust height for different breakpoints
        width: { xs: xsWidth, sm: width }, // Adjust width for different breakpoints
        margin: 'auto',
        marginTop: { xs: '35%', sm: '5%' }, // Adjust margin-top for different breakpoints
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
          // Styles for the inner box containing the logo.
          width: { xs: '70%', sm: '70%' }, // Adjust width for different breakpoints
          borderBottom: '2px solid #34C4B5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Render the logo inside an <img> element with dynamic styles. */}
        <img src={logo} style={{ width: '60%', height: 'auto', maxWidth: '200px', maxHeight: '150px' }} />
      </Box>
      {children /* Render any child components inside this custom box */}
      {buttonText && (
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            // Styles for the button inside the custom box.
            color: 'white',
            backgroundColor: '#155360',
            borderRadius: '10px',
            fontSize: { xs: '0.9rem', sm: '0.7rem', md: '1rem' }, // Adjust font size for different breakpoints
            '&:hover': {
              backgroundColor: 'rgba(52, 196, 181, 1)',
            },
          }}
        >
          {buttonText /* Render the button text */}
        </Button>
      )}
    </Box>
  );
}

// Export the 'CustomBox' component as the default export.
export default CustomBox;
