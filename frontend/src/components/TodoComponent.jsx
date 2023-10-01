import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/pencil.png';
import Swal from 'sweetalert2';
import '../styles/swalButtonStyles.css';

function TodoComponent({ category, onReturn }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, checked: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
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
          const updatedTasks = [...tasks];
          updatedTasks.splice(index, 1);
          setTasks(updatedTasks);
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your todo has been deleted.',
            'success'
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your todo is safe',
            'error'
          );
        }
      });
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
  };

  const handleEditTask = (index, newValue) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { text: newValue, checked: tasks[index].checked };
    setTasks(updatedTasks);
  };

  const handleToggleCheckbox = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    updatedTasks.sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? 1 : -1));
    setTasks(updatedTasks);
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
      <Button
        variant='contained'
        onClick={onReturn}
        sx={{
          position: 'absolute',
          top: '0.1rem',
          left: '0.1rem',
        }}
      >
        Back
      </Button>
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
        {`Tasks in ${category}`}
      </Typography>

      <Box
        sx={{
          width: '100%',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
        }}
      >
        {tasks.map((task, index) => (
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
              width: '80%',
              height: '50px',
              boxShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 4px',
              textDecoration: task.checked ? 'line-through' : 'none',
              color: task.checked ? 'grey' : 'inherit',
            }}
          >
            <Checkbox
              color='primary'
              checked={task.checked}
              onChange={() => handleToggleCheckbox(index)}
            />
            {task.text}
            <div>
              <img
                src={editIcon}
                alt='Edit'
                style={{
                  width: '18px',
                  height: '18px',
                  marginRight: '3px',
                  cursor: 'pointer',
                }}
                onClick={() => showEditTaskModal(index, task)}
              />
              <img
                src={deleteIcon}
                alt='Delete'
                style={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                }}
                onClick={() => handleDeleteTask(index)}
              />
            </div>
          </Paper>
        ))}
      </Box>

      <TextField
        label='Add a New Task'
        variant='outlined'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
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
        onClick={handleAddTask}
      >
        Add Task +
      </Button>
    </Box>
  );
}

export default TodoComponent;

