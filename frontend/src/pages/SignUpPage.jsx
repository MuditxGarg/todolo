import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CustomBox from '../components/CustomBox';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
	return (
		<Box
			sx={{
				height: '100vh',
				overflow: 'hidden',
			}}
		>
			<CustomBox height={'70%'} width={'25%'} buttonText={'SignUp'}>
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
						sx={{
							width: '100%',
							marginTop: '0.5rem',
						}}
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
							marginTop: '0.5rem',
						}}
						InputLabelProps={{
							style: {
								color: '#155360',
								fontWeight: 'bold',
								fontSize: '13px',
							}
						}}
					/>
					<TextField
						label="Password"
						variant="standard"
						sx={{
							width: '100%',
							marginTop: '0.5rem',
						}}
						InputLabelProps={{
							style: {
								color: '#155360',
								fontWeight: 'bold',
								fontSize: '13px',
							}
						}}
					/>
					<TextField
						label="Confirm Password"
						variant="standard"
						sx={{
							width: '100%',
							marginTop: '0.5rem',
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
			</CustomBox>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '0.7rem',
				}}
			>
				Already registered? <Link to="/login" className="signup-link">Login!</Link>
			</Box>
		</Box>
	)
}

export default SignUpPage;
