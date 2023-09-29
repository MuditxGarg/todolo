import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ListPage() {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = () => {
        if (newCategory.trim() !== '') {
            setCategories([...categories, newCategory]);
            setNewCategory('');
        }
    };

    const handleDeleteCategory = (index) => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
    };

    const handleEditCategory = (index, newValue) => {
        const updatedCategories = [...categories];
        updatedCategories[index] = newValue;
        setCategories(updatedCategories);
    };

    return (
        <Box
            sx={{
                height: '80vh',
                width: '30vw',
                margin: 'auto',
                marginTop: '2%',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '3px solid #34C4B5',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                padding: '1rem',
            }}
        >
            <Typography
                variant='h5'
                className='lilitaOne'
                sx={{
                    color: '#155360',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '1rem',
                }}
            >
                Your Categories
            </Typography>

            <Box
                sx={{
                    width: '100%',
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Center horizontally
                    overflowY: 'auto', // Set to 'auto' to show scrollbar when needed
                }}
            >
                {categories.map((category, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        sx={{
                            padding: '1rem',
                            marginBottom: '0.7rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderColor: '#155360',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderRadius: '8px',
                            width: '80%', // Set width to 80%
                            height: '50px', // Increase height
                            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 4px',
                        }}
                    >
                        {category}
                        <div>
                            <IconButton
                                aria-label="Edit"
                                onClick={() => {
                                    const newValue = prompt('Edit category', category);
                                    if (newValue !== null) {
                                        handleEditCategory(index, newValue);
                                    }
                                }}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Delete"
                                onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this category?')) {
                                        handleDeleteCategory(index);
                                    }
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </Paper>
                ))}
            </Box>

            <TextField
                label="Enter a New Category"
                variant="outlined"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                InputProps={{
                    style: {
                        borderColor: '#155360', // Change the border color
                    },
                }}
                sx={{
                    width: '80%',
                    marginBottom: '1rem', // Add spacing between added categories and the new category text field
                }}
            />


            <Button
                variant="contained"
                sx={{
                    color: 'white',
                    backgroundColor: '#155360',
                    borderRadius: '10px',
                    fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1rem' },
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    '&:hover': {
                        backgroundColor: 'rgba(52, 196, 181, 1)',
                    },
                }}
                onClick={handleAddCategory}
            >
                Add Category +
            </Button>
        </Box>
    );
}

export default ListPage;
