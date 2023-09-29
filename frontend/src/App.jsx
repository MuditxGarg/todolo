import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import OtpPage from './pages/OtpPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ListPage from './pages/ListPage';
import ToDoPage from './pages/ToDoPage';
import ProfilePage from './pages/ProfilePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/otp' element={<OtpPage />} />
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/list' element={<ListPage/>}/>
            <Route path='/ToDo' element={<ToDoPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/reset-password' element={<ForgotPasswordPage/>}/>
        </Routes>
    </Router>
  );
}

export default App
