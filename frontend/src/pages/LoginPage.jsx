import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Swal from 'sweetalert2';
import CustomBox from '../components/CustomBox';
import { useNavigate } from 'react-router-dom';
import LoginPageStyles from '../styles/LoginPageStyles';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(
    '8 characters or more'
  );
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Clear the placeholder when the user starts typing
    if (newPassword) {
      setPasswordPlaceholder('');
    } else {
      setPasswordPlaceholder('8 characters or more');
    }
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
    } else if (password.trim() === '') {
      // Show Swal alert if the password is empty
      Swal.fire({
        icon: 'error',
        title: 'Password cannot be empty!',
        text: 'Please enter your password.',
      });
    } else if (password.length < 8) {
      // Show Swal alert if the password is too short
      Swal.fire({
        icon: 'error',
        title: 'Password is too short!',
        text: 'Password should be at least 8 characters long.',
      });
    } else {
      console.log('Form submitted with email:', email, 'and password:', password);
      navigate('/todo');
    }
  };

  return (
    <>
    <LoginPageStyles />
    <Box
      sx={{
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CustomBox height={'70%'} width={'25%'} buttonText={'Login'} onButtonClick={handleSubmit}>
        <Box
          sx={{
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
              },
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
              },
            }}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder={passwordPlaceholder}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '1rem', // Add margin for spacing
            }}
          >
            <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
              <Link href="/resetPassword" className="signup-link">
                Forgot Password?
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
              Not registered?{' '}
              <Link href="/signup" className="signup-link">
                Sign Up!
              </Link>
            </Typography>
          </Box>
        </Box>
      </CustomBox>
    </Box>
    </>
  );
}

export default LoginPage;

