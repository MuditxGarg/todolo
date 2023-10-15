// Import necessary modules and components
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import backIcon from "../assets/back-arrow.png";
import logoutIcon from "../assets/logout.png";
import todoIcon from "../assets/to-do-list.png";
import user from "../assets/user.png";
import Swal from "sweetalert2"; // Import a third-party alert library
import { useNavigate } from "react-router-dom"; // Import a router navigation hook
import AvatarSelectionModal from "../components/AvatarSelectionModal"; // Import a custom component for avatar selection
import ProfilePageStyles from "../styles/ProfilePageStyles"; // Import styling for the profile page
import axios from "axios";

// Define the ProfilePage component
function ProfilePage({ setIsLoggedIn }) {
  // Define state variables using useState hook
  const [isChangePassword, setIsChangePassword] = useState(false); // Whether the user is changing the password
  const [currentPassword, setCurrentPassword] = useState(""); // Current password input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState(""); // New password input
  const [confirmNewPassword, setConfirmNewPassword] = useState(""); // Confirm new password input
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(
    "8 characters or more",
  ); // Placeholder text for password inputs
  const [selectedAvatar, setSelectedAvatar] = useState(null); // Selected avatar image
  const [isAvatarModalOpen, setAvatarModalOpen] = useState(false); // Whether the avatar selection modal is open
  const navigate = useNavigate(); // Router navigation hook for page redirection
  const [taskAndCategory, setTaskAndCategory] = useState({
    categoryCount: 0,
    taskCount: 0,
  });

  useEffect(() => {
    handleUserEmail();
    handleUsername();
    getCount();
  });

  const handleUserEmail = async () => {
    try {
      const res = await axios.get("/api/v1/getDetails");
      if (res.data.email) {
        setEmail(res.data.email);
      }
    } catch (error) {
      // Todo Sweet alert
    }
  };

  const handleUsername = async () => {
    try {
      const res = await axios.get("/api/v1/getDetails");
      if (res.data.name) {
        setUsername(res.data.name);
      }
    } catch (error) {
      // Todo Sweet alert
    }
  };

  const getCount = async () => {
    try {
      const res = await axios.get("/protected/getTotalCategoryAndTask");
      if (res.data) {
        setTaskAndCategory(res.data);
      } else {
        // Todo sweet alert
      }
    } catch (error) {
      // Todo sweet alert
    }
  };

  // Event handler for changing the new password input
  const handleChangePassword = (event) => {
    const newPassword = event.target.value;
    setNewPassword(newPassword);
    setIsChangePassword(true);

    // Clear the placeholder when the user starts typing
    if (newPassword) {
      setPasswordPlaceholder("");
    } else {
      setPasswordPlaceholder("8 characters or more");
    }
  };

  // Event handler for changing the current password input
  const handleCurrentPasswordChange = (event) => {
    const newPassword = event.target.value;
    setCurrentPassword(newPassword);

    // Clear the placeholder when the user starts typing
    if (newPassword) {
      setPasswordPlaceholder("");
    } else {
      setPasswordPlaceholder("8 characters or more");
    }
  };

  // Event handler for changing the confirm new password input
  const handleConfirmPasswordChange = (event) => {
    const newPassword = event.target.value;
    setConfirmNewPassword(newPassword);

    // Clear the placeholder when the user starts typing
    if (newPassword) {
      setPasswordPlaceholder("");
    } else {
      setPasswordPlaceholder("8 characters or more");
    }
  };

  // Event handler for user logout
  const handleLogout = () => {
    // Display a confirmation dialog using Swal (SweetAlert2)
    Swal.fire({
      title: "Logout",
      text: "Are you sure you want to logout?",
      icon: "question",
      iconColor: "red",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "red",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(
            "/api/v1/logout",
            {},
            { withCredentials: true },
          );
          if (res.message === "Logout successful") {
            navigate("/").then(() => setIsLoggedIn(false)); // Redirect to the home page on logout
          } else {
            // todo swal error
          }
        } catch (error) {
          // Todo swal error
        }
        // Perform the logout logic here if needed
      }
    });
  };

  // Event handler for navigating to the todo list page
  const handleTodoList = () => {
    navigate("/todo");
  };

  // Event handler for going back from the password change form
  const handleBack = () => {
    setIsChangePassword(false);
  };

  // Event handler for submitting password change
  const handleSubmitPasswordChange = () => {
    // Check for empty fields
    if (
      !currentPassword.trim() ||
      !newPassword.trim() ||
      !confirmNewPassword.trim()
    ) {
      Swal.fire({
        icon: "error",
        title: "Fields cannot be empty!",
        text: "Please fill in all password fields.",
      });
      return;
    }

    // Check for minimum password length
    if (newPassword.length < 8 || confirmNewPassword.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Password must be at least 8 characters!",
        text: "Please choose longer passwords.",
      });
      return;
    }

    // Check if new password and confirm new password match
    if (newPassword !== confirmNewPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match!",
        text: "Please make sure the new passwords match.",
      });
      return;
    }

    // Check if current password is at least 8 characters
    if (currentPassword.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Password must be at least 8 characters!",
        text: "Please enter a valid current password.",
      });
      return;
    }

    setIsChangePassword(false); // Close the password change form
    // Handle password change logic here
  };

  // Event handler for avatar selection
  const handleAvatarSelection = (avatarImage) => {
    setSelectedAvatar(avatarImage);
    setAvatarModalOpen(false); // Close the avatar selection modal
  };

  return (
    <>
      <ProfilePageStyles /> {/* Apply styling to the profile page */}
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "70%",
            width: "25%",
            margin: "auto",
            marginTop: "5%",
            backgroundColor: "white",
            borderRadius: "12px",
            border: "3px solid #34C4B5",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px", // Add padding to the main container
            position: "relative", // Make the inner box relative for positioning
          }}
          className="parentContainer"
        >
          {/* Conditional rendering for buttons based on the state */}
          {!isChangePassword && (
            <>
              {/* Button to navigate to the to-do list */}
              <IconButton
                onClick={handleTodoList}
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "15px",
                  backgroundColor: "#fff",
                  zIndex: 1,
                }}
              >
                <img
                  src={todoIcon}
                  alt="New Button"
                  style={{ width: "18px", height: "18px", cursor: "pointer" }}
                />
              </IconButton>

              {/* Button to handle user logout */}
              <IconButton
                onClick={handleLogout}
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "15px",
                  backgroundColor: "#fff",
                  zIndex: 1,
                }}
              >
                <img
                  src={logoutIcon}
                  alt="Back"
                  style={{ width: "18px", height: "18px", cursor: "pointer" }}
                />
              </IconButton>
            </>
          )}

          {/* Conditional rendering for the back button in password change mode */}
          {isChangePassword && (
            <IconButton
              onClick={handleBack}
              sx={{
                position: "absolute",
                top: "10px",
                left: "15px",
                backgroundColor: "#fff",
                zIndex: 1,
              }}
            >
              <img
                src={backIcon}
                alt="Back"
                style={{ width: "18px", height: "18px", cursor: "pointer" }}
              />
            </IconButton>
          )}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "20px",
              paddingTop: "1.2rem",
            }}
          >
            {/* Conditional rendering based on whether to show user profile or password change form */}
            {!isChangePassword ? (
              <>
                {selectedAvatar ? (
                  <img
                    src={selectedAvatar}
                    style={{
                      width: "80px",
                      height: "80px",
                      marginBottom: "10px",
                    }}
                    alt="User"
                  />
                ) : (
                  <img
                    src={user}
                    style={{
                      width: "80px",
                      height: "80px",
                      marginBottom: "10px",
                    }}
                    alt="User"
                  />
                )}
                <Typography
                  variant="h5"
                  sx={{ color: "#155360", fontWeight: "600" }}
                >
                  {username}
                </Typography>
                <Typography
                  variant="subtitle"
                  sx={{ color: "#155360", fontWeight: "600" }}
                >
                  Email: {email}
                </Typography>
                <br />
                <Typography
                  variant="subtitle"
                  sx={{ color: "#155360", fontWeight: "600" }}
                >
                  Category Count: {taskAndCategory.categoryCount}
                </Typography>
                <Typography
                  variant="subtitle"
                  sx={{ color: "#155360", fontWeight: "600" }}
                >
                  Total Task Count: {taskAndCategory.taskCount}
                </Typography>
                {/* Button to change the user's avatar */}
                <Button
                  onClick={() => setAvatarModalOpen(true)}
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#155360",
                    borderRadius: "10px",
                    fontSize: { xs: "0.9rem", sm: "0.7rem", md: "1rem" },
                    "&:hover": {
                      backgroundColor: "rgba(52, 196, 181, 1)",
                    },
                    width: "fit-content",
                    marginTop: "1.8rem",
                  }}
                >
                  Change Avatar
                </Button>
                {/* Button to switch to password change mode */}
                <Button
                  onClick={handleChangePassword}
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#155360",
                    borderRadius: "10px",
                    fontSize: { xs: "0.9rem", sm: "0.7rem", md: "1rem" },
                    "&:hover": {
                      backgroundColor: "rgba(52, 196, 181, 1)",
                    },
                    width: "fit-content",
                    marginTop: "1.8rem",
                  }}
                >
                  Change Password
                </Button>
              </>
            ) : (
              <>
                <Typography
                  variant="h5"
                  sx={{ color: "#155360", fontWeight: "600" }}
                >
                  Change Password
                </Typography>
                <Typography
                  variant="standard"
                  sx={{ color: "#155360", fontWeight: "600" }}
                >
                  User's Name
                </Typography>
                <Typography
                  variant="subtitle"
                  sx={{ color: "#155360", fontWeight: "600" }}
                >
                  Email: user@example.com
                </Typography>
              </>
            )}
          </Box>
          {/* Render password change form if isChangePassword is true */}
          {isChangePassword && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "10px",
              }}
            >
              {/* Password input fields */}
              <TextField
                type="password"
                variant="standard"
                label="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                sx={{ width: "100%", marginBottom: "10px" }}
                InputLabelProps={{
                  style: {
                    color: "#155360",
                    fontWeight: "bold",
                    fontSize: "13px",
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
                sx={{ width: "100%", marginBottom: "10px" }}
                InputLabelProps={{
                  style: {
                    color: "#155360",
                    fontWeight: "bold",
                    fontSize: "13px",
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
                sx={{ width: "100%", marginBottom: "10px" }}
                InputLabelProps={{
                  style: {
                    color: "#155360",
                    fontWeight: "bold",
                    fontSize: "13px",
                  },
                }}
                placeholder={passwordPlaceholder}
              />
              {/* Button to submit password change */}
              <Button
                onClick={handleSubmitPasswordChange}
                variant="contained"
                sx={buttonStyle}
              >
                Submit
              </Button>
            </Box>
          )}
        </Box>
        {/* Avatar selection modal */}
        <AvatarSelectionModal
          isOpen={isAvatarModalOpen}
          onClose={() => setAvatarModalOpen(false)}
          onSelect={handleAvatarSelection}
        />
      </Box>
    </>
  );
}

// Styling for the submit button
const buttonStyle = {
  color: "white",
  backgroundColor: "#155360",
  borderRadius: "10px",
  marginTop: "1.4rem",
  fontSize: { xs: "0.9rem", sm: "0.7rem", md: "1rem" }, // Adjust font size for different breakpoints
  "&:hover": {
    backgroundColor: "rgba(52, 196, 181, 1)",
  },
};

// Export the ProfilePage component as the default export
export default ProfilePage;
