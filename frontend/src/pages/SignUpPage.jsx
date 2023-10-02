import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CustomBox from '../components/CustomBox';
import Swal from 'sweetalert2';


function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (name.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Name cannot be empty!',
        text: 'Please enter your name.',
      });
    } else if (email.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Email cannot be empty!',
        text: 'Please enter your email.',
      });
    } else if (!isEmailValid(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid email format!',
        text: 'Please enter a valid email address.',
      });
    } else if (password.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Password cannot be empty!',
        text: 'Please enter your password.',
      });
    } else if (password.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Password must be at least 8 characters long!',
        text: 'Please choose a longer password.',
      });
    } else if (confirmPassword.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Confirm Password cannot be empty!',
        text: 'Please confirm your password.',
      });
    } else if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Passwords do not match!',
        text: 'Please make sure your passwords match.',
      });
    } else {
      console.log('Form submitted with email:', email, 'and password:', password);
	  navigate('/otp');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <CustomBox height={'70%'} width={'25%'} buttonText={'SignUp'} onButtonClick={handleSubmit}>
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
              },
            }}
            onChange={handleNameChange}
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
              },
            }}
            onChange={handleEmailChange}
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
              },
            }}
            type="password"
            onChange={handlePasswordChange}
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
              },
            }}
            type="password"
            onChange={handleConfirmPasswordChange}
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
  );
}

export default SignUpPage;
