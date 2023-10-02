import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CustomBox from '../components/CustomBox';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import OtpPageStyles from '../styles/OtpPageStyles';


function OtpPage() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = () => {
    if (otp.trim() === '') {
      // Show a Swal alert if OTP is empty
      Swal.fire({
        icon: 'error',
        title: 'OTP cannot be empty!',
        text: 'Please enter the OTP sent to your email.',
      });
    } else {
      // Handle OTP verification here
      // You can add your OTP verification logic here
	  navigate('/login');
    }
  };

  return (
    <>
      <OtpPageStyles />
      <CustomBox
        height={'60vh'}
        width={'25vw'}
        buttonText={'Verify'}
        onButtonClick={handleSubmit}
      >
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
                fontSize: '13px',
              },
            }}
            onChange={handleOtpChange}
          />
        </Box>
        <div className="registration-text">
          Did not get an OTP? <a href="/otp" className="signup-link">Resend!</a>
        </div>
      </CustomBox>
    </>
  );
}

export default OtpPage;
