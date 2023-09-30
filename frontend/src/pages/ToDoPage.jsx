import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox'; // Import Checkbox component
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/pencil.png';
import Swal from 'sweetalert2';

function ToDoPage() {
  const [tasks, settasks] = useState([]);
  const [newtask, setNewtask] = useState('');

  useEffect(() => {

  }, [tasks]);

  const handleAddtask = () => {
    if (newtask.trim() !== '') {
      settasks([...tasks, { text: newtask, checked: false }]);
      setNewtask('');
    }
  };

  const handleDeletetask = (index) => {
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
        const updatedtasks = [...tasks];
        updatedtasks.splice(index, 1);
        settasks(updatedtasks);
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your todo has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your todo is safe',
          'error'
        )
      }
    })
  };

  const showEditTaskModal = (index, task) => {
    Swal.fire({
      title: 'Edit your task',
      input: 'text',
      inputLabel: 'Your new task',
      inputValue: task.text,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Please enter a task';
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const newValue = result.value;
        handleEditTask(index, newValue);
      } 
    });
  }

  const handleEditTask = (index, newValue) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { text: newValue, checked: tasks[index].checked };
    settasks(updatedTasks);
  };

  const handleToggleCheckbox = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    updatedTasks.sort((a,b) => (a.checked === b.checked) ? 0: a.checked ? 1 : -1)
    settasks(updatedTasks);
  };

  return (
    <Box
      sx={{
        height: '70vh',
        width: '60vw',
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
        Your Tasks
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
        {tasks.map((task, index) => (
          <Paper
            key={index}
            elevation={3}
            className={`task-item ${task.checked ? 'checked' : ''}`}
            sx={{
              padding: '1rem',
              fontSize: '1rem',
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
              textDecoration: task.checked ? 'line-through' : 'none', // Apply strikethrough if checked
              color: task.checked ? 'grey' : 'inherit', // Grey out text if checked
            }}
          >
            <Checkbox
              color="primary"
              checked={task.checked}
              onChange={() => handleToggleCheckbox(index)}
            />
            {task.text}
            <div>
              <img
                src={editIcon}
                alt="Edit"
                style={{ width: '18px', height: '18px', marginRight: '3px', cursor: 'pointer' }}
                onClick={() => showEditTaskModal(index, task)}
              />
              <img
                src={deleteIcon}
                alt="Delete"
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                onClick={() => {
                  handleDeletetask(index);
                }}
              />
            </div>
          </Paper>
        ))}
      </Box>

      <TextField
        label="Add a New Task"
        variant="outlined"
        value={newtask}
        onChange={(e) => setNewtask(e.target.value)}
        InputProps={{
          style: {
            borderColor: '#155360', // Change the border color
          },
        }}
        sx={{
          width: '80%',
          marginBottom: '1rem', // Add spacing between added tasks and the new task text field
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
        onClick={handleAddtask}
      >
        Add Task +
      </Button>
    </Box>
  );
}

export default ToDoPage;
