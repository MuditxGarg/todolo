import React, { useState } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import backIcon from '../assets/back-arrow.png';

function ResetPasswordPage() {
    const [currentStep, setCurrentStep] = useState(0); // Added state for the current step
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const navigate = useNavigate();

    const handleSendOtp = () => {
        setIsOtpSent(true);
        setCurrentStep(1); // Move to the next step (Enter OTP)
    };

    const handleVerifyOtp = () => {
        setIsOtpVerified(true);
        setCurrentStep(2); // Move to the next step (Set New Password)
    };

    const handleSubmitNewPassword = () => {
        // Add code here to handle password reset
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1); // Go back to the previous step
        }
        else{
            navigate('/login');
        }
    };

    return (
        <Box sx={{ height: '100vh', overflow: 'hidden' }}>
            <Box
                sx={{
                    height: '70%',
                    width: '25%',
                    margin: 'auto',
                    marginTop: '5%',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    border: '3px solid #34C4B5',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px', // Add padding to the main container
                    position: 'relative', // Make the inner box relative for positioning
                }}
            >
                {currentStep >= -1 && (
                    <img
                        src={backIcon}
                        alt='Back'
                        style={{
                            width: '25px',
                            height: '25px',
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            cursor: 'pointer',
                        }}
                        onClick={handleBack}
                    />
                )}
                <Box
                    sx={{
                        width: '100%',
                        borderBottom: '2px solid #34C4B5',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: '20px', // Add padding between elements in this section
                    }}
                >
                    {currentStep === 0 ? (
                        <>
                            <Typography variant="h5" sx={{ color: '#155360', fontWeight:'600'}}>Reset Password</Typography>
                            <Typography variant="subtitle1" sx={{ color: '#155360', fontWeight:'600'}}>Enter your Email</Typography>

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
                            />
                            <Button onClick={handleSendOtp} variant="contained" sx={buttonStyle}>
                                Send OTP
                            </Button>
                        </>
                    ) : currentStep === 1 ? (
                        <>
                            <Typography variant="subtitle1" sx={{ color: '#155360', fontWeight:'600'}}>Enter OTP received on email</Typography>

                            <TextField
                                type="text"
                                label="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                sx={{ width: '60%', marginBottom: '10px' }}
                            />
                            <Button onClick={handleVerifyOtp} variant="contained" sx={buttonStyle}>
                                Verify
                            </Button>
                        </>
                    ) : (
                        <>
                            <Typography variant="subtitle1" sx={{ color: '#155360', fontWeight:'600'}}>Set New Password</Typography>
                            <TextField
                                type="password"
                                label="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
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
                            <TextField
                                type="password"
                                label="Confirm New Password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
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
                            <Button onClick={handleSubmitNewPassword} variant="contained" sx={buttonStyle}>
                                Submit
                            </Button>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

const buttonStyle = {
    color: 'white',
    backgroundColor: '#155360',
    borderRadius: '10px',
    marginTop: '2rem',
    fontSize: { xs: '0.9rem', sm: '0.7rem', md: '1rem' }, // Adjust font size for different breakpoints
    '&:hover': {
        backgroundColor: 'rgba(52, 196, 181, 1)',
    },
};

export default ResetPasswordPage;
