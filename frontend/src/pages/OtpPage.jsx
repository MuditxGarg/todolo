import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../assets/logo.jpeg';

function OtpPage() {
  return (
    <Box
			sx={{
				height: '60vh',
				width: '25vw',
				margin: 'auto',
				marginTop: '7%',
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
					width: '70%',
					borderBottom: '2px solid #34C4B5',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<img src={logo} style={{width: '200px', height: '150px'}}/>
			</Box>
      <Typography variant='subtitle' sx={{color: '#155360', fontWeight: 'bold'}}>OTP has been sent on email</Typography>
			<Box
				sx={{
					width: '70%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					alignItems: 'flex-start',
				}}
			>
				<TextField
					id="standard-basic"
					label="OTP"
					variant="standard"
					sx={{width: '100%'}}
					InputLabelProps={{
						style: {
							color: '#155360',
							fontWeight: 'bold',
						}
					}}
				/>
			</Box>
			<Button
        variant="contained"
        sx={{
          color: 'white',
          backgroundColor: '#155360',
          borderRadius: '10px',
          marginTop: '1rem', // Add some top margin for spacing
          fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1rem' }, // Adjust font size for different breakpoints
          '&:hover': {
            backgroundColor: 'rgba(52, 196, 181, 1)',
          },
        }}
      >
				Verify
			</Button>
    </Box>
  )
}

export default OtpPage;
