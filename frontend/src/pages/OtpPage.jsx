import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CustomBox from '../components/CustomBox';

function OtpPage() {
	return (
		<CustomBox height={'60vh'} width={'25vw'} buttonText={'Verify'}>
			<Typography variant='subtitle' sx={{ color: '#155360', fontWeight: 'bold' }}>OTP has been sent on email</Typography>
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
					sx={{ width: '100%' }}
					InputLabelProps={{
						style: {
							color: '#155360',
							fontWeight: 'bold',
						}
					}}
				/>
			</Box>
		</CustomBox>
	)
}

export default OtpPage;
