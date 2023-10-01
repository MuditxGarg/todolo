import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomBox from '../components/CustomBox.jsx'

function ResetPasswordPage() {
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleVerifyOtp = () => {
        // Add code here to verify OTP
        setIsOtpVerified(true);
    };

    const handleSubmitNewPassword = () => {
        // Add code here to handle password reset
    };

    return (
        <Box
            sx={{
                height: '100vh',
                overflow: 'hidden',
            }}
        >
          <CustomBox height={'70%'} width={'30%'} buttonText={'Verify'}>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: '20px', // Add padding between elements in this section
                }}
            >
                {!isOtpVerified && (
                    <>
                        <Typography variant="h5">Reset Password</Typography>
                        <br/>
                        <Typography variant="subtitle1">Enter OTP received on mail</Typography>
                        <br/>
                        <TextField
                            type="text"
                            label="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            sx={{ width: '60%', marginBottom: '10px' }}
                        />
                    </>
                )}
                {isOtpVerified && (
                    <>
                        <Typography variant="subtitle1">Set New Password</Typography>
                        <TextField
                            type="password"
                            label="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            sx={{ width: '100%', marginBottom: '10px' }}
                        />
                        <TextField
                            type="password"
                            label="Confirm New Password"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            sx={{ width: '100%', marginBottom: '10px' }}
                        />
                        <Button onClick={handleSubmitNewPassword} variant="contained" sx={submitButtonStyle}>
                            Submit
                        </Button>
                    </>
                )}
            </Box>
          </CustomBox>
        </Box>
    );
}

const buttonStyle = {
    color: 'white',
    backgroundColor: '#155360',
    borderRadius: '10px',
    fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
    width: '100%',
    marginTop: '10px',
    '&:hover': {
        backgroundColor: 'rgba(52, 196, 181, 1)',
    },
};

export default ResetPasswordPage;
