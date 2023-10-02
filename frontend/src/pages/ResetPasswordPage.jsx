import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import backIcon from '../assets/back-arrow.png';
import logo from '../assets/TODOLO_final.png';
import Swal from 'sweetalert2'; // Import Swal for alerts

function ResetPasswordPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const navigate = useNavigate();

    const handleSendOtp = () => {

        if (!email.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Empty Field!',
                text: 'Email Field should not be empty.',
            });
            return;
        }
        else if(!isValidEmail(email))
        {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email!',
                text: 'Please enter a valid email address.',
            });
            return;
        }
        else{
            setIsOtpSent(true);
            setCurrentStep(1);
        }
        
    };

    const handleVerifyOtp = () => {
        if (!otp.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Empty Field!',
                text: 'OTP field should not be empty.',
            });
            return;
        }
        else if(otp.length !== 6)
        {
            Swal.fire({
                icon: 'error',
                title: 'Invalid OTP!',
                text: 'Please enter a valid 6-digit OTP.',
            });
            return;
        }
        
        setIsOtpVerified(true);
        setCurrentStep(2);
    };

    const handleSubmitNewPassword = () => {
        if (!newPassword.trim() || !confirmNewPassword.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Empty Fields!',
                text: 'The fields are empty',
            });
            return;
        }
        else if(newPassword.length < 8 || confirmNewPassword.length <8 ){
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password!',
                text: 'The passwords should have atleast 8 characters',
            });
            return;
        }
        else if(newPassword !== confirmNewPassword)
        {
            Swal.fire({
                icon: 'error',
                title: 'Password do not match!',
                text: 'Make sure the passwords match',
            });
            return;
        }

        navigate('/login');
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
        else {
            navigate('/login');
        }
    };

    return (
        <Box sx={{ height: '100vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                    padding: '10px',
                    position: 'relative',
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
                            top: '8px',
                            left: '20px',
                            cursor: 'pointer',
                        }}
                        onClick={handleBack}
                    />
                )}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: '20px',
                    }}
                >
                    {currentStep === 0 ? (
                        <>
                            <img
                                src={logo}
                                alt="Logo"
                                style={{
                                    width: '150px',
                                    height: 'auto',
                                    marginBottom: '1rem',
                                }}
                            />
                            <Typography variant="h5" sx={{ width: '80%', textAlign: 'center', paddingTop: '1.2rem', color: '#155360', fontWeight: '600', borderTop: '2px solid #34C4B5' }}>Reset Password</Typography>
                            <Typography variant="subtitle1" sx={{ marginTop: '1rem', color: '#155360', fontWeight: '600' }}>Enter your Email</Typography>

                            <TextField
                                label="Email"
                                variant="standard"
                                sx={{ width: '80%' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                            <img
                                src={logo}
                                alt="Logo"
                                style={{
                                    width: '150px',
                                    height: 'auto',
                                    marginBottom: '1rem',
                                }}
                            />
                            <Typography variant="subtitle1" sx={{ width: '80%', textAlign: 'center', paddingTop: '1.2rem', color: '#155360', fontWeight: '600', borderTop: '2px solid #34C4B5' }}>Enter OTP received on email</Typography>

                            <TextField
                                variant="standard"
                                label="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                InputLabelProps={{
                                    style: {
                                        color: '#155360',
                                        fontWeight: 'bold',
                                        fontSize: '15px',
                                    },
                                }}
                                sx={{ width: '80%', marginBottom: '10px', marginTop: '2.5rem' }}
                            />
                            <Button onClick={handleVerifyOtp} variant="contained" sx={buttonStyle}>
                                Verify
                            </Button>
                        </>
                    ) : (
                        <>
                            <img
                                src={logo}
                                alt="Logo"
                                style={{
                                    width: '150px',
                                    height: 'auto',
                                    marginBottom: '1rem',
                                }}
                            />
                            <Typography variant="subtitle1" sx={{ width: '80%', textAlign: 'center', paddingTop: '1.2rem', color: '#155360', fontWeight: '600', borderTop: '2px solid #34C4B5' }}>Set New Password</Typography>
                            <TextField
                                type="password"
                                variant="standard"
                                label="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                sx={{
                                    width: '80%',
                                    marginTop: '1rem',
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
                                variant="standard"
                                label="Confirm New Password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                sx={{
                                    width: '80%',
                                    marginTop: '1rem',
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
    marginTop: '1.5rem',
    fontSize: { xs: '0.9rem', sm: '0.7rem', md: '1rem' },
    '&:hover': {
        backgroundColor: 'rgba(52, 196, 181, 1)',
    },
};

export default ResetPasswordPage;
