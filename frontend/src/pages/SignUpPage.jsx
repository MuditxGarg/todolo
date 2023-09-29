import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CustomBox from '../components/CustomBox';

function SignUpPage() {
	return (
		<CustomBox height={'60vh'} width={'25vw'} buttonText={'SignUp'}>
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
					label="Name"
					variant="standard"
					sx={{ width: '100%' }}
					InputLabelProps={{
						style: {
							color: '#155360',
							fontWeight: 'bold',
                            fontSize: '13px',
						}
					}}
				/>
                <TextField
					id="standard-basic"
					label="Email"
					variant="standard"
					sx={{ width: '100%' }}
					InputLabelProps={{
						style: {
							color: '#155360',
							fontWeight: 'bold',
                            fontSize: '13px',
						}
					}}
				/>
                <TextField
					id="standard-basic"
					label="Password"
					variant="standard"
					sx={{ width: '100%' }}
					InputLabelProps={{
						style: {
							color: '#155360',
							fontWeight: 'bold',
                            fontSize: '13px',
						}
					}}
				/>
                <TextField
					id="standard-basic"
					label="Confirm Password"
					variant="standard"
					sx={{ width: '100%' }}
					InputLabelProps={{
						style: {
							color: '#155360',
							fontWeight: 'bold',
                            fontSize: '13px',
						}
					}}
				/>
			</Box>
            <div className="registration-text">
            Already registered? <a href="/login" className="signup-link">Login!</a>
            </div>
		</CustomBox>
	)
}

export default SignUpPage;
