import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'; // Import IconButton
import backIcon from '../assets/back-arrow.png';
import user from '../assets/user.png';
import Swal from 'sweetalert2';

function ProfilePage() {
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [passwordPlaceholder, setPasswordPlaceholder] = useState(
        '8 characters or more'
      );


      const handleChangePassword = (event) => {
        const newPassword = event.target.value;
        setNewPassword(newPassword);
        setIsChangePassword(true);
        // Clear the placeholder when the user starts typing
        if (newPassword) {
          setPasswordPlaceholder('');
        } else {
          setPasswordPlaceholder('8 characters or more');
        }
      };
      
      const handleCurrentPasswordChange = (event) => {
        const newPassword = event.target.value;
        setCurrentPassword(newPassword);
    
        // Clear the placeholder when the user starts typing
        if (newPassword) {
          setPasswordPlaceholder('');
        } else {
          setPasswordPlaceholder('8 characters or more');
        }
      };

      const handleConfirmPasswordChange = (event) => {
        const newPassword = event.target.value;
        setConfirmNewPassword(newPassword);
    
        // Clear the placeholder when the user starts typing
        if (newPassword) {
          setPasswordPlaceholder('');
        } else {
          setPasswordPlaceholder('8 characters or more');
        }
      };

      

    const handleBack = () => {
        setIsChangePassword(false);
    };

    const handleSubmitPasswordChange = () => {
        // Check for empty fields
        if (!currentPassword.trim() || !newPassword.trim() || !confirmNewPassword.trim()) {
          Swal.fire({
            icon: 'error',
            title: 'Fields cannot be empty!',
            text: 'Please fill in all password fields.',
          });
          return;
        }
    
        // Check for minimum password length
        if (newPassword.length < 8 || confirmNewPassword.length < 8) {
          Swal.fire({
            icon: 'error',
            title: 'Password must be at least 8 characters!',
            text: 'Please choose longer passwords.',
          });
          return;
        }
    
        // Check if new password and confirm new password match
        if (newPassword !== confirmNewPassword) {
          Swal.fire({
            icon: 'error',
            title: 'Passwords do not match!',
            text: 'Please make sure the new passwords match.',
          });
          return;
        }
        
        if(currentPassword.length <8)
        {
            Swal.fire({
                icon: 'error',
                title: 'Password must be at least 8 characters!',
                text: 'Please enter a valid current password.',
              });
              return;
        }
        setIsChangePassword(false);

        
        // Handle password change logic here
      };

    return (
        <Box
            sx={{
                height: '100vh',
                overflow: 'hidden',
            }}
        >
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
                {isChangePassword && (
                    <IconButton
                        onClick={handleBack}
                        sx={{
                            position: 'absolute',
                            top: '10px',
                            left: '15px',
                            backgroundColor: '#fff',
                            zIndex: 1,
                        }}
                    >
                        <img
                            src={backIcon}
                            alt="Back"
                            style={{ width: '18px', height: '18px', cursor: 'pointer'}}
                        />
                    </IconButton>
                )}

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: '20px',
                        paddingTop: '1.2rem',
                    }}
                >
                    {!isChangePassword ? (
                        <>
                            <img src={user} style={{ width: '80px', height: '80px', marginBottom: '10px' }} alt="User" />
                            <Typography variant="h5" sx={{ color: '#155360', fontWeight: '600' }}>
                                User's Name
                            </Typography>
                            <Typography variant="subtitle" sx={{ color: '#155360', fontWeight: '600' }}>
                                Email: user@example.com
                            </Typography>
                            <br/>
                            <Typography variant="subtitle" sx={{ color: '#155360', fontWeight: '600' }}>
                                Category Count: 5
                            </Typography>
                            <Typography variant="subtitle" sx={{ color: '#155360', fontWeight: '600' }}>
                                Total Task Count: 10
                            </Typography>
                            <Button
                                onClick={handleChangePassword}
                                variant="contained"
                                sx={{
                                    color: 'white',
                                    backgroundColor: '#155360',
                                    borderRadius: '10px',
                                    fontSize: { xs: '0.9rem', sm: '0.7rem', md: '1rem' },
                                    // Adjust font size for different breakpoints
                                    '&:hover': {
                                        backgroundColor: 'rgba(52, 196, 181, 1)',
                                    },
                                    width: 'fit-content',
                                    marginTop: '1.8rem',
                                }}
                            >
                                Change Password
                            </Button>
                        </>
                    ) : (
                        <>
                            <Typography variant="h5" sx={{ color: '#155360', fontWeight: '600' }}>
                                Change Password
                            </Typography>
                            <Typography variant="standard" sx={{ color: '#155360', fontWeight: '600' }}>
                                User's Name
                            </Typography>
                            <Typography variant="subtitle" sx={{ color: '#155360', fontWeight: '600'  }}>
                                Email: user@example.com
                            </Typography>
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
                            padding: '10px',
                        }}
                    >
                        <TextField
                            type="password"
                            variant="standard"
                            label="Current Password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            sx={{ width: '100%', marginBottom: '10px' }}
                            InputLabelProps={{
                                style: {
                                  color: '#155360',
                                  fontWeight: 'bold',
                                  fontSize: '13px',
                                },
                              }}    
                              placeholder={passwordPlaceholder}
                            
                        />
                        <TextField
                            type="password"
                            variant="standard"
                            label="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            sx={{ width: '100%', marginBottom: '10px' }}
                            InputLabelProps={{
                                style: {
                                  color: '#155360',
                                  fontWeight: 'bold',
                                  fontSize: '13px',
                                },
                              }}
                              placeholder={passwordPlaceholder}

                        />
                        <TextField
                            type="password"
                            variant="standard"
                            label="Confirm New Password"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            sx={{ width: '100%', marginBottom: '10px' }}
                            InputLabelProps={{
                                style: {
                                  color: '#155360',
                                  fontWeight: 'bold',
                                  fontSize: '13px',
                                },
                              }}
                              placeholder={passwordPlaceholder}
                        />
                        <Button onClick={handleSubmitPasswordChange} variant="contained" sx={buttonStyle}>
                            Submit
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

const buttonStyle = {
    color: 'white',
    backgroundColor: '#155360',
    borderRadius: '10px',
    marginTop: '1.4rem',
    fontSize: { xs: '0.9rem', sm: '0.7rem', md: '1rem' }, // Adjust font size for different breakpoints
    '&:hover': {
        backgroundColor: 'rgba(52, 196, 181, 1)',
    },
};

export default ProfilePage;
