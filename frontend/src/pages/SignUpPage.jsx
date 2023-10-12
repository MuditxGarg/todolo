// Import necessary dependencies and components
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CustomBox from "../components/CustomBox";
import Swal from "sweetalert2";
import SignUpPageStyles from "../styles/SignUpPageStyles";
import axios from "axios";

function SignUpPage() {
  // Define state variables for form inputs and navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // State variable for password placeholder text
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(
    "8 characters or more",
  );

  // Event handler for email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Event handler for password input change
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Clear the placeholder when the user starts typing
    if (newPassword) {
      setPasswordPlaceholder("");
    } else {
      setPasswordPlaceholder("8 characters or more");
    }
  };

  // Event handler for name input change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Event handler for confirm password input change
  const handleConfirmPasswordChange = (event) => {
    const newPassword = event.target.value;
    setConfirmPassword(newPassword);

    // Clear the placeholder when the user starts typing
    if (newPassword) {
      setPasswordPlaceholder("");
    } else {
      setPasswordPlaceholder("8 characters or more");
    }
  };

  // Function to validate email format
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Event handler for form submission
  const handleSubmit = async () => {
    // Regular expression to allow only letters and spaces in the name
    const nameRegex = /^[A-Za-z\s]+/;

    // Form validation checks
    if (!name.match(nameRegex)) {
      // Display an error message for an invalid name
      Swal.fire({
        icon: "error",
        title: "Invalid Name!",
        text: "Name cannot contain numbers or special characters.",
      });
    } else if (name.trim() === "") {
      // Display an error message for an empty name field
      Swal.fire({
        icon: "error",
        title: "Name cannot be empty!",
        text: "Please enter your name.",
      });
    } else if (email.trim() === "") {
      // Display an error message for an empty email field
      Swal.fire({
        icon: "error",
        title: "Email cannot be empty!",
        text: "Please enter your email.",
      });
    } else if (!isEmailValid(email)) {
      // Display an error message for an invalid email format
      Swal.fire({
        icon: "error",
        title: "Invalid email format!",
        text: "Please enter a valid email address.",
      });
    } else if (password.trim() === "") {
      // Display an error message for an empty password field
      Swal.fire({
        icon: "error",
        title: "Password cannot be empty!",
        text: "Please enter your password.",
      });
    } else if (password.length < 8) {
      // Display an error message for a short password
      Swal.fire({
        icon: "error",
        title: "Password must be at least 8 characters long!",
        text: "Please choose a longer password.",
      });
    } else if (confirmPassword.trim() === "") {
      // Display an error message for an empty confirm password field
      Swal.fire({
        icon: "error",
        title: "Confirm Password cannot be empty!",
        text: "Please confirm your password.",
      });
    } else if (password !== confirmPassword) {
      // Display an error message for mismatched passwords
      Swal.fire({
        icon: "error",
        title: "Passwords do not match!",
        text: "Please make sure your passwords match.",
      });
    } else {
      // If all validations pass, log the form submission and navigate to '/otp'
      const response = await axios.post("/api/v1/signup", {
        name: name,
        email: email,
        password: password,
      });

      if (response.data && response.data.redirectTo) {
        navigate(response.data.redirectTo);
      } else if (response.data && response.data.message) {
        Swal.fire({
          icon: "error",
          title: response.data.message,
        });
      }
    }
  };

  // Render the sign-up page components
  return (
    <>
      {/* Apply SignUpPageStyles */}
      <SignUpPageStyles />
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* CustomBox component for the sign-up form */}
        <CustomBox
          height={"75%"}
          width={"25%"}
          buttonText={"SignUp"}
          onButtonClick={handleSubmit}
          paddingB={"1.2rem"}
        >
          <Box
            sx={{
              width: "100%", // Changed to 100%
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "2rem", // Added padding for spacing
            }}
          >
            {/* Text fields for name, email, password, and confirm password */}
            <TextField
              label="Name"
              variant="standard"
              sx={{
                width: "80%",
                marginTop: "0.5rem",
              }}
              InputLabelProps={{
                style: {
                  color: "#155360",
                  fontWeight: "bold",
                  fontSize: "13px",
                },
              }}
              onChange={handleNameChange}
            />
            <TextField
              label="Email"
              variant="standard"
              sx={{
                width: "80%",
                marginTop: "0.5rem",
              }}
              InputLabelProps={{
                style: {
                  color: "#155360",
                  fontWeight: "bold",
                  fontSize: "13px",
                },
              }}
              onChange={handleEmailChange}
            />
            <TextField
              label="Password"
              variant="standard"
              sx={{
                width: "80%",
                marginTop: "0.5rem",
              }}
              InputLabelProps={{
                style: {
                  color: "#155360",
                  fontWeight: "bold",
                  fontSize: "13px",
                },
              }}
              type="password"
              onChange={handlePasswordChange}
              placeholder={passwordPlaceholder}
            />
            <TextField
              label="Confirm Password"
              variant="standard"
              sx={{
                width: "80%",
                marginTop: "0.5rem",
              }}
              InputLabelProps={{
                style: {
                  color: "#155360",
                  fontWeight: "bold",
                  fontSize: "13px",
                },
              }}
              type="password"
              onChange={handleConfirmPasswordChange}
              placeholder={passwordPlaceholder}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              top: "37rem",
              marginBottom: "2rem",
            }}
          >
            {/* Link to the login page */}
            Already registered?{" "}
            <Link to="/login" className="signup-link">
              Login!
            </Link>
          </Box>
        </CustomBox>
      </Box>
    </>
  );
}

export default SignUpPage;
