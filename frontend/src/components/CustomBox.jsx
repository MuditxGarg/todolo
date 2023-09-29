import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../assets/logo.jpeg';

function CustomBox({ height, width, buttonText, children }) {
	return (
		<Box
			sx={{
				height: {height},
				width: {width},
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
				<img src={logo} style={{ width: '200px', height: '150px' }} />
			</Box>
			{children}
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
				{buttonText}
			</Button>
		</Box>
	)
}

export default CustomBox;
