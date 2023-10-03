import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button } from '@mui/material';

// Define a functional component named 'AvatarSelectionModal' that accepts 'isOpen', 'onClose', and 'onSelect' props.
function AvatarSelectionModal({ isOpen, onClose, onSelect }) {
  // Define a state variable 'avatarImages' to store the imported avatar image paths.
  const [avatarImages, setAvatarImages] = useState([]);

  // Use the 'useEffect' hook to run the image import logic when the component mounts.
  useEffect(() => {
    // Define an asynchronous function to import avatar images.
    const importImages = async () => {
      const importPromises = [];
      // Loop through avatar image numbers from 1 to 24 and import each image.
      for (let i = 1; i <= 24; i++) {
        importPromises.push(import(`../assets/avatars/avatar_${i}.png`));
      }

      try {
        // Wait for all import promises to resolve and store the image paths.
        const avatarImagePaths = await Promise.all(importPromises);
        // Extract the 'default' property from each imported module and set it in the state.
        setAvatarImages(avatarImagePaths.map((module) => module.default));
      } catch (error) {
        console.error('Error importing avatar images:', error);
      }
    };

    // Call the 'importImages' function when the component mounts (empty dependency array).
    importImages();
  }, []);

  // Render a modal dialog with avatar selection options.
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="avatar-selection-modal"
      aria-describedby="select-avatar"
    >
      <Box
        sx={{
          // Style for the modal content.
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
            // Render each avatar image as an <img> element with an 'onClick' event.
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
          sx={{
            backgroundColor: '#155360',
            color: '#FFFFFF',
            marginTop: '10px',
            '&:hover': {
              backgroundColor: 'rgba(52, 196, 181, 1)',
            },
          }}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}

// Export the 'AvatarSelectionModal' component as the default export.
export default AvatarSelectionModal;
