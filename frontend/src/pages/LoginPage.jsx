// Import necessary dependencies and components
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Swal from "sweetalert2";
import CustomBox from "../components/CustomBox";
import { useNavigate } from "react-router-dom";
import LoginPageStyles from "../styles/LoginPageStyles";
import axios from "axios";

function LoginPage() {
  // Define state variables for email, password, and password placeholder
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(
    "8 characters or more",
  );
  const navigate = useNavigate();

  // Event handler for email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to validate email format
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

  // Event handler for form submission
  const handleSubmit = async () => {
    if (email.trim() === "") {
      // Show Swal alert if the email is empty
      Swal.fire({
        icon: "error",
        title: "Email cannot be empty!",
        text: "Please enter your email.",
      });
    } else if (!isEmailValid(email)) {
      // Show Swal alert if the email format is invalid
      Swal.fire({
        icon: "error",
        title: "Invalid email format!",
        text: "Please enter a valid email address.",
      });
    } else if (password.trim() === "") {
      // Show Swal alert if the password is empty
      Swal.fire({
        icon: "error",
        title: "Password cannot be empty!",
        text: "Please enter your password.",
      });
    } else if (password.length < 8) {
      // Show Swal alert if the password is too short
      Swal.fire({
        icon: "error",
        title: "Password is too short!",
        text: "Password should be at least 8 characters long.",
      });
    } else {
      const res = await axios.post("/api/v1/login", {
        email: email,
        password: password,
      });

      console.log(res);

      if (res.data.message) {
        if (res.data.message === "Successful Login") {
          navigate("/todo");
        } else if (res.data.message === "Incorrect Password") {
          Swal.fire({
            icon: "error",
            title: "Incorrect Password Or Email",
            text: "Please enter correct email or password",
          });
        } else if (res.data.message === "Not registered") {
          Swal.fire({
            icon: "Warning",
            title: "Register Yourself",
            text: "Please register yourself",
          });
        }
      }
    }
  };

  // Render the login page components
  return (
    <>
      {/* Apply LoginPageStyles */}
      <LoginPageStyles />
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* CustomBox component for the login form */}
        <CustomBox
          height={"70%"}
          width={"25%"}
          buttonText={"Login"}
          onButtonClick={handleSubmit}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
            }}
          >
            {/* Text field for entering email */}
            <TextField
              label="Email"
              variant="standard"
              sx={{ width: "100%" }}
              InputLabelProps={{
                style: {
                  color: "#155360",
                  fontWeight: "bold",
                  fontSize: "13px",
                },
              }}
              value={email}
              onChange={handleEmailChange}
            />
            {/* Text field for entering password */}
            <TextField
              label="Password"
              variant="standard"
              sx={{
                width: "100%",
                marginTop: "2rem",
              }}
              InputLabelProps={{
                style: {
                  color: "#155360",
                  fontWeight: "bold",
                  fontSize: "13px",
                },
              }}
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder={passwordPlaceholder}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "1rem", // Add margin for spacing
              }}
            >
              {/* Link to reset password page */}
              <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                <Link href="/resetPassword" className="signup-link">
                  Forgot Password?
                </Link>
              </Typography>
              {/* Link to sign-up page */}
              <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                Not registered?{" "}
                <Link href="/signup" className="signup-link">
                  Sign Up!
                </Link>
              </Typography>
            </Box>
          </Box>
        </CustomBox>
      </Box>
    </>
  );
}

export default LoginPage;
