import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import OtpPage from "./pages/OtpPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodoPage from "./pages/TodoPage";
import ProfilePage from "./pages/ProfilePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import HelpPage from "./pages/HelpPage";
import AboutUsPage from "./pages/AboutUsPage";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchToken();
  });

  const fetchToken = async () => {
    try {
      const response = await axios.get("/api/v1/checkToken"); // Replace with your backend API endpoint
      const check = response.data.message;
      if (check === "Token exists") {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error fetching token:", error);
      // todo swal error
    }
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/todo" /> : <LandingPage />}
        />
        <Route path="/otp" element={<OtpPage />} />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route
          path="/profile"
          element={<ProfilePage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
