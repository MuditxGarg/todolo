import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import user from '../assets/user.png';
import CustomBox from '../components/CustomBox.jsx'

function ProfilePage() {
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    
    const handleChangePassword = () => {
        setIsChangePassword(true);
    };

    const handleBack = () => {
        setIsChangePassword(false);
    };

    const handleSubmitPasswordChange = () => {
        // Add code here to handle password change
    };

    return (
        <Box
            sx={{
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            <CustomBox height={'70%'} width={'30%'} paddingB={'1.3rem'}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: '20px', // Add padding between elements in this section
                        paddingTop: '1.2rem', // Add padding between elements in this section
                    }}
                >
                    <img src={user} style={{ width: '80px', height: '80px', marginBottom: '10px' }} alt="User" />
                    <Typography variant="h5" sx={{ marginBottom: '5px' }}>
                        User's Name
                    </Typography>
                    {!isChangePassword && (
                        <>
                            <Typography variant="subtitle1" sx={{ marginBottom: '5px' }}>
                                Email: user@example.com
                            </Typography>
                            <Button onClick={handleChangePassword} variant="contained"
                                sx={{
                                    color: 'white',
                                    backgroundColor: '#155360',
                                    borderRadius: '10px',
                                    fontSize: { xs: '0.9rem', sm: '0.7rem', md: '1rem' }, // Adjust font size for different breakpoints
                                    '&:hover': {
                                        backgroundColor: 'rgba(52, 196, 181, 1)',
                                    },
                                    width: '35%',
                                    marginTop: '1.8rem',
                                }}
                            >
                                Change Password
                            </Button>
                        </>
                    )}
                    {isChangePassword && (
                        <>
                            <Typography variant="subtitle1">Change Password</Typography>
                            <Button onClick={handleBack} variant="contained" sx={buttonStyle}>
                                Back
                            </Button>
                        </>
                    )}
                </Box>
                {isChangePassword && (
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            padding: '20px', // Add padding between elements in this section
                        }}
                    >
                        <TextField
                            type="password"
                            label="Current Password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            sx={{ width: '100%', marginBottom: '10px' }}
                        />
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
                        <Button onClick={handleSubmitPasswordChange} variant="contained" sx={buttonStyle}>
                            Submit
                        </Button>
                    </Box>
                )}
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

export default ProfilePage;
