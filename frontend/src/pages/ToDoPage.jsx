import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox'; // Import Checkbox component

function ToDoPage() {
  const [tasks, settasks] = useState([]);
  const [newtask, setNewtask] = useState('');

  const handleAddtask = () => {
    if (newtask.trim() !== '') {
      settasks([...tasks, { text: newtask, checked: false }]);
      setNewtask('');
    }
  };

  const handleDeletetask = (index) => {
    const updatedtasks = [...tasks];
    updatedtasks.splice(index, 1);
    settasks(updatedtasks);
  };

  const handleEdittask = (index, newValue) => {
    const updatedtasks = [...tasks];
    updatedtasks[index] = { text: newValue, checked: tasks[index].checked };
    settasks(updatedtasks);
  };

  const handleToggleCheckbox = (index) => {
    const updatedtasks = [...tasks];
    updatedtasks[index].checked = !updatedtasks[index].checked;
    settasks(updatedtasks);
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
            sx={{
              padding: '1rem',
              fontSize: '2rem',
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
              <IconButton
                aria-label="Edit"
                onClick={() => {
                  const newValue = prompt('Edit Task', task.text);
                  if (newValue !== null) {
                    handleEdittask(index, newValue);
                  }
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="Delete"
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this Task?')) {
                    handleDeletetask(index);
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
