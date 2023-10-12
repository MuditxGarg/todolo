// Import necessary dependencies and components
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CustomBox from "../components/CustomBox";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import OtpPageStyles from "../styles/OtpPageStyles";
import axios from "axios";

function OtpPage() {
  // Define state variable for OTP input and navigation
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  // Event handler for OTP input change
  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = async () => {
    if (otp.trim() === "") {
      // Show a Swal alert if OTP is empty
      Swal.fire({
        icon: "error",
        title: "OTP cannot be empty!",
        text: "Please enter the OTP sent to your email.",
      });
    } else {
      const res = await axios.post("/api/v1/verifyOtp");

      if (res.data.message === "User Registered Successfully") {
        navigate("/login"); // Navigate to the login page upon successful OTP submission
      } else {
        Swal.fire({
          icon: "error",
          title: "Incorrect OTP",
          text: "Please enter the correct OTP",
        });
      }
    }
  };

  // Render the OTP verification page components
  return (
    <>
      {/* Apply OtpPageStyles */}
      <OtpPageStyles />
      <CustomBox
        height={"60vh"}
        width={"25vw"}
        buttonText={"Verify"}
        onButtonClick={handleSubmit}
      >
        {/* Display a message indicating that OTP has been sent to email */}
        <Typography
          variant="subtitle"
          sx={{ color: "#155360", fontWeight: "bold" }}
        >
          OTP has been sent on email
        </Typography>
        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
          }}
        >
          {/* Text field for entering OTP */}
          <TextField
            id="standard-basic"
            label="OTP"
            variant="standard"
            sx={{ width: "100%" }}
            InputLabelProps={{
              style: {
                color: "#155360",
                fontWeight: "bold",
                fontSize: "13px",
              },
            }}
            onChange={handleOtpChange}
          />
        </Box>
        <div className="registration-text">
          {/* Offer an option to resend OTP */}
          Did not get an OTP?{" "}
          <a href="/otp" className="signup-link">
            Resend!
          </a>
        </div>
      </CustomBox>
    </>
  );
}

export default OtpPage;
