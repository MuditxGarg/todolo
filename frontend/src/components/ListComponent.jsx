import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import editIcon from '../assets/pencil.png';
import deleteIcon from '../assets/delete.png';
import Swal from 'sweetalert2';
import '../styles/swalButtonStyles.css';
import ListComponentStyles from '../styles/ListComponentStyles';

// Define a functional component named 'ListComponent' that accepts 'onCategoryClick' as a prop.
function ListComponent({ onCategoryClick }) {
  // Define state variables for categories and a new category input.
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  // Function to add a new category.
  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    } else {
      // Show an error message using SweetAlert2 if the category name is empty.
      Swal.fire({
        icon: 'error',
        title: 'Category name cannot be empty!',
        text: 'Please enter a category name.',
      });
    }
  };

  // Function to delete a category, with confirmation dialog.
  const handleDeleteCategory = (index) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const updatedCategories = [...categories];
          updatedCategories.splice(index, 1);
          setCategories(updatedCategories);
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your category has been deleted.',
            'success'
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your category is safe',
            'error'
          );
        }
      });
  };

  // Function to show an edit category dialog.
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
  };

  // Function to edit a category.
  const handleEditCategory = (index, newValue) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = newValue;
    setCategories(updatedCategories);
  };

  // Render the component with JSX.
  return (
    <>
      <ListComponentStyles /> {/* Apply styles for this component */}
      <Box
        sx={{
          // Define styles for the main container.
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
        className='parentContainer' // Add a class name to the container
      >
        <Typography
          variant='h5'
          className='lilitaOne' // Apply a custom class for typography
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
            // Styles for the container of category items.
            width: '100%',
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflowY: 'auto',
          }}
        >
          {categories.map((category, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                // Styles for each category item.
                padding: '1rem',
                marginBottom: '0.7rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderColor: '#155360',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderRadius: '8px',
                width: '80%',
                height: '50px',
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 4px',
              }}
            >
              {/* Render category name with ellipsis for long names. */}
              <span
                onClick={() => onCategoryClick(category)}
                style={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '80%',
                }}
              >
                {category}
              </span>
              <div>
                {/* Render edit and delete icons with click handlers. */}
                <img
                  src={editIcon}
                  alt='Edit'
                  style={{ width: '18px', height: '18px', marginRight: '3px', cursor: 'pointer' }}
                  onClick={() => showEditCategoryModal(index, category)}
                />
                <img
                  src={deleteIcon}
                  alt='Delete'
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  onClick={() => handleDeleteCategory(index)}
                />
              </div>
            </Paper>
          ))}
        </Box>

        <TextField
          label='Enter a New Category'
          variant='outlined'
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          InputProps={{
            style: {
              borderColor: '#155360',
            },
          }}
          sx={{
            width: '80%',
            marginBottom: '1rem',
          }}
        />

        <Button
          variant='contained'
          sx={{
            // Styles for the "Add Category" button.
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
          onClick={handleAddCategory} // Attach the click handler to the button.
        >
          Add Category +
        </Button>
      </Box>
    </>
  );
}

// Export the 'ListComponent' component as the default export.
export default ListComponent;
