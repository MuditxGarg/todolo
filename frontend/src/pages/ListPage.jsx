import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/pencil.png';
import Swal from 'sweetalert2';
import '../styles/swalButtonStyles.css';

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
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
              const updatedCategories = [...categories];
              updatedCategories.splice(index, 1);
              setCategories(updatedCategories);
              swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your category has been deleted.',
              'success'
            )
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your category is safe',
              'error'
            )
          }
        })
    };

    const showEditCategoryModal = (index, category) => {
      Swal.fire({
        title: 'Edit your category',
        input: 'text',
        inputLabel: 'Your new category',
        inputValue: category,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Please enter a category';
          }
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const newValue = result.value;
          handleEditCategory(index, newValue);
        } 
      });
    }

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
                        <img
                                src={editIcon}
                                alt="Edit"
                                style={{ width: '18px', height: '18px', marginRight:'3px', cursor: 'pointer' }}
                                onClick={() => showEditCategoryModal(index, category)}
                            />
                            <img
                                src={deleteIcon}
                                alt="Delete"
                                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                onClick={() => 
                                        handleDeleteCategory(index)
                                }
                            />
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
