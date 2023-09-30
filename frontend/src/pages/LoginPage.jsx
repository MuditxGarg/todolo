import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CustomBox from '../components/CustomBox';

function LoginPage() {
	return (
		<Box sx={{ height: '100vh', overflow: 'hidden' }}>
			<CustomBox height={'70%'} width={'25%'} buttonText={'Login'}>
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
						label="Email"
						variant="standard"
						sx={{
							width: '100%',
							marginTop: '2rem',
						}}
						InputLabelProps={{
							style: {
								color: '#155360',
								fontWeight: 'bold',
								fontSize: '13px',
							}
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Typography variant='body2' sx={{ marginRight: '0.8rem', fontSize: '0.8rem' }}>
						<Link href="/" className="signup-link">Forgot Password?</Link>
					</Typography>
					<Typography variant='body2' sx={{ fontSize: '0.8rem' }}>
						Not registered? <Link href="/signup" className="signup-link">Sign Up!</Link>
					</Typography>
				</Box>
			</CustomBox>
		</Box>
	)
}

export default LoginPage;
