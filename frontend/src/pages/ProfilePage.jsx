import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import user from '../assets/user.png';

function ProfilePage() {
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [isChangeEmail, setIsChangeEmail] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleChangePassword = () => {
        setIsChangePassword(true);
        setIsChangeEmail(false);
    };

    const handleChangeEmail = () => {
        setIsChangeEmail(true);
        setIsChangePassword(false);
    };

    const handleBack = () => {
        setIsChangePassword(false);
        setIsChangeEmail(false);
    };

    const handleSubmitEmailChange = () => {
        // Add code here to handle email change and redirect to OTP page
    };

    const handleSubmitPasswordChange = () => {
        // Add code here to handle password change
    };

    return (
        <Box
            sx={{
                height: '70vh',
                width: '30vw',
                margin: 'auto',
                marginTop: '5%',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '3px solid #34C4B5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px', // Add padding to the main container
            }}
        >
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
                <img src={user} style={{ width: '80px', height: '80px', marginBottom: '10px' }} alt="User" />
                <Typography variant="h5" sx={{ marginBottom: '5px' }}>
                    User's Name
                </Typography>
                {!isChangeEmail && !isChangePassword && (
                    <>
                        <Typography variant="subtitle1" sx={{ marginBottom: '5px' }}>
                            Email: user@example.com
                        </Typography>
                        <Button onClick={handleChangeEmail} variant="contained" sx={buttonStyle}>
                            Change Email
                        </Button>
                        <Button onClick={handleChangePassword} variant="contained" sx={buttonStyle}>
                            Change Password
                        </Button>
                    </>
                )}
                {isChangeEmail && (
                    <>
                        <Typography variant="subtitle1">Change Email</Typography>
                        <Button onClick={handleBack} variant="contained" sx={buttonStyle}>
                            Back
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
            {isChangeEmail && (
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
                        type="email"
                        label="Current Email"
                        value={currentEmail}
                        onChange={(e) => setCurrentEmail(e.target.value)}
                        sx={{ width: '100%', marginBottom: '10px' }}
                    />
                    <TextField
                        type="email"
                        label="Enter New Email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        sx={{ width: '100%', marginBottom: '10px' }}
                    />
                    <Button onClick={handleSubmitEmailChange} variant="contained" sx={buttonStyle}>
                        Submit
                    </Button>
                </Box>
            )}
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
