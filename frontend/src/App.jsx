import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import OtpPage from './pages/OtpPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage';
import ProfilePage from './pages/ProfilePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HelpPage from './pages/HelpPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/otp' element={<OtpPage />} />
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/todo' element={<TodoPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/resetPassword' element={<ForgotPasswordPage/>}/>
            <Route path='/help' element={<HelpPage/>}/>
            <Route path='/AboutUs' element={<AboutUsPage/>}/>
        </Routes>
    </Router>
  );
}

export default App
