import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button } from '@mui/material';

function AvatarSelectionModal({ isOpen, onClose, onSelect }) {
  const [avatarImages, setAvatarImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const importPromises = [];
      for (let i = 1; i <= 24; i++) {
        importPromises.push(import(`../assets/avatars/avatar_${i}.png`));
      }

      try {
        const avatarImagePaths = await Promise.all(importPromises);
        setAvatarImages(avatarImagePaths.map((module) => module.default));
      } catch (error) {
        console.error('Error importing avatar images:', error);
      }
    };

    importImages();
  }, []);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="avatar-selection-modal"
      aria-describedby="select-avatar"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '80vw',
          maxHeight: '80vh',
          width: 'auto',
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
        }}
      >
        <h2 style={{ color: '#155360' }}>Select Avatar</h2>
        <div>
          {avatarImages.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index + 1}`}
              style={{ width: '80px', height: '80px', cursor: 'pointer', margin: '10px' }}
              onClick={() => onSelect(avatar)}
            />
          ))}
        </div>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ backgroundColor: '#155360', color: '#FFFFFF', marginTop: '10px', '&:hover': {
            backgroundColor: 'rgba(52, 196, 181, 1)',
          },}}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}

export default AvatarSelectionModal;
