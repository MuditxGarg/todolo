import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CustomBox from '../components/CustomBox';

function LoginPage() {
	return (
		<CustomBox height={'60vh'} width={'25vw'} buttonText={'Login'}>
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
			</Box>
            <div className="registration-text">
                <a href="/" className="signup-link">Forgot Password? </a>
            </div>
            <div className="registration-text">
                Not registered? <a href="/signup" className="signup-link">Sign Up!</a>
            </div>
		</CustomBox>
	)
}

export default LoginPage;
