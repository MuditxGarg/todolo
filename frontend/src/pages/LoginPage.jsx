import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Swal from 'sweetalert2';
import CustomBox from '../components/CustomBox';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (email.trim() === '') {
      // Show Swal alert if the email is empty
      Swal.fire({
        icon: 'error',
        title: 'Email cannot be empty!',
        text: 'Please enter your email.',
      });
    } else if (!isEmailValid(email)) {
      // Show Swal alert if the email format is invalid
      Swal.fire({
        icon: 'error',
        title: 'Invalid email format!',
        text: 'Please enter a valid email address.',
      });
    }else if (password.trim() === '') {
      // Show Swal alert if the password is empty
      Swal.fire({
        icon: 'error',
        title: 'Password cannot be empty!',
        text: 'Please enter your password.',
      });
    } else {
      console.log('Form submitted with email:', email, 'and password:', password);
    }
  };

	return (
		<Box sx={{ height: '100vh', overflow: 'hidden' }}>
			<CustomBox height={'70%'} width={'25%'} buttonText={'Login'} onButtonClick={handleSubmit}>
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
            value={email}
            onChange={handleEmailChange}
					/>
					<TextField
						label="Password"
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
            type="password"
            value={password}
            onChange={handlePasswordChange}
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Typography variant='body2' sx={{ marginRight: '0.8rem', fontSize: '0.8rem' }}>
						<Link href="/resetPassword" className="signup-link">Forgot Password?</Link>
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
