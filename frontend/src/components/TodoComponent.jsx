import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/pencil.png";
import backIcon from "../assets/back-arrow.png";
import Swal from "sweetalert2";
import "../styles/swalButtonStyles.css";
import TodoComponentStyles from "../styles/TodoComponentStyles";
import axios from "axios";

// Define a functional component named 'TodoComponent' that accepts 'category' and 'onReturn' as props.
function TodoComponent({ category, onReturn }) {
  // Define state variables for tasks and a new task input.
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await axios.get("/protected/getTasks", {
        params: { category: category },
      });

      if (res.data.tasks) {
        setTasks(res.data.tasks);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Internal Server Error",
        text: "Try again in sometime please",
      });
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [category, fetchTasks]);

  const handleAddTask = async () => {
    if (newTask.trim() !== "") {
      try {
        // Make a POST request to add a new task
        const response = await axios.post("/protected/addTask", {
          task: newTask,
          category: category, // Pass the selected category name
        });

        // Assuming the server returns a success message
        if (response.data.message === "Task Added Successfully") {
          // Update the local tasks state with the new task
          fetchTasks();
          setNewTask("");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Internal Server Error",
          text: "Could not add the task",
        });
      }
    } else {
      // Show an error message using SweetAlert2 if the task name is empty.
      Swal.fire({
        icon: "error",
        title: "Task name cannot be empty!",
        text: "Please enter a task name.",
      });
    }
  };

  // Function to delete a task, with confirmation dialog.
  const handleDeleteTask = async (taskId) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    try {
      const result = await swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      });
      if (result.isConfirmed) {
        const res = await axios.delete(`/protected/deleteTask/${taskId}`);

        if (res.data.message === "Deleted Task") {
          fetchTasks(); // Call fetchTasks to update the tasks
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your todo has been deleted.",
            "success",
          );
        } else {
          Swal.fire({
            icon: "error",
            title: "Could not delete the task",
            text: "Please try again in sometime",
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your todo is safe",
          "error",
        );
      }
    } catch (error) {
      console.log("Error deleting task: ", error);
      Swal.fire({
        icon: "error",
        title: "Could not delete the category",
        text: "Please try again in sometime",
      });
    }
  };

  // Function to show an edit task dialog.
  const showEditTaskModal = (index, task) => {
    Swal.fire({
      title: "Edit your task",
      input: "text",
      inputLabel: "Your new task",
      inputValue: task.task,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "Please enter a task";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const newValue = result.value;
        handleEditTask(task._id, newValue);
      }
    });
  };

  // Function to edit a task.
  const handleEditTask = async (taskId, newValue) => {
    try {
      const res = await axios.put(`/protected/editTask/${taskId}`, {
        task: newValue,
      });

      if (res.data.message === "Updated Task") {
        fetchTasks(); // Call fetchTasks to update the tasks
      } else {
        throw new Error("Could not edit the category");
      }
    } catch (error) {
      console.error("Error editing task:", error);
      Swal.fire({
        icon: "error",
        title: "Could not edit the task",
        text: "Please try again in sometime",
      });
    }
  };

  // Function to toggle the checkbox of a task.
  const handleToggleCheckbox = async (taskId) => {
    try {
      await axios.put(`/protected/taskDone/${taskId}`);
      const response = await axios.get("/protected/getTasks", {
        params: { category: category },
      });
      if (response.data.tasks) {
        setTasks(response.data.tasks);
      }
    } catch (error) {
      console.error("Error toggling checkbox:", error);
      Swal.fire({
        icon: "error",
        title: "Could not mark the task",
        text: "Please try again in sometime",
      });
    }
  };

  // Function to handle clicking on task text for overflow.
  const handleTextClick = (event, task) => {
    const spanElement = event.target;

    if (spanElement.scrollWidth > spanElement.clientWidth) {
      // Text is overflowing, display a SweetAlert message.
      Swal.fire(task);
    }
  };

  // Render the component with JSX.
  return (
    <>
      <TodoComponentStyles /> {/* Apply styles for this component */}
      <Box
        sx={{
          // Define styles for the main container.
          height: "70vh",
          width: "60vw",
          margin: "auto",
          marginTop: "2%",
          backgroundColor: "white",
          borderRadius: "12px",
          border: "3px solid #34C4B5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          padding: "1rem",
        }}
        className="parentContainer" // Add a class name to the container
      >
        <img
          src={backIcon}
          alt="Back"
          onClick={onReturn} // Attach the click handler to the back button
          style={{
            position: "absolute",
            top: "0.1rem",
            left: "0.1rem",
            width: "35px",
            height: "35px",
            cursor: "pointer",
            paddingLeft: "5px",
          }}
        />
        <Typography
          variant="h5"
          className="lilitaOne" // Apply a custom class for typography
          sx={{
            color: "#155360",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1rem",
            maxWidth: "80%",
            overflow: "hidden",
          }}
        >
          {`Tasks in ${category.category}`} {/* Display the category name */}
        </Typography>

        <Box
          sx={{
            // Styles for the container of task items.
            width: "100%",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "auto",
          }}
        >
          {tasks.map((task, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                // Styles for each task item.
                padding: "1rem",
                marginBottom: "0.7rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderColor: "#155360",
                borderWidth: "2px",
                borderStyle: "solid",
                borderRadius: "8px",
                width: "80%",
                height: "50px",
                boxShadow: "rgba(0, 0, 0, 0.4) 0px 4px 4px",
                textDecoration: task.checked ? "line-through" : "none",
                color: task.checked ? "grey" : "inherit",
              }}
            >
              <Checkbox
                color="primary"
                checked={task.checked}
                onChange={() => handleToggleCheckbox(task._id)}
              />
              <span
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "45%",
                  cursor: "pointer",
                }}
                onClick={(event) => handleTextClick(event, task.task)}
              >
                {task.task}
              </span>
              <div>
                {/* Render edit and delete icons with click handlers. */}
                <img
                  src={editIcon}
                  alt="Edit"
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "3px",
                    cursor: "pointer",
                  }}
                  onClick={() => showEditTaskModal(index, task)}
                />
                <img
                  src={deleteIcon}
                  alt="Delete"
                  style={{
                    width: "18px",
                    height: "18px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDeleteTask(task._id)}
                />
              </div>
            </Paper>
          ))}
        </Box>

        <TextField
          label="Add a New Task"
          variant="outlined"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          InputProps={{
            style: {
              borderColor: "#155360",
            },
          }}
          sx={{
            width: "80%",
            marginBottom: "1rem",
          }}
        />

        <Button
          variant="contained"
          sx={{
            // Styles for the "Add Task" button.
            color: "white",
            backgroundColor: "#155360",
            borderRadius: "10px",
            fontSize: { xs: "0.5rem", sm: "0.7rem", md: "1rem" },
            marginLeft: "auto",
            marginRight: "auto",
            "&:hover": {
              backgroundColor: "rgba(52, 196, 181, 1)",
            },
          }}
          onClick={handleAddTask} // Attach the click handler to the button.
        >
          Add Task +
        </Button>
      </Box>
    </>
  );
}

// Export the 'TodoComponent' component as the default export.
export default TodoComponent;
