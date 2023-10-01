import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import HelpPageStyles from '../styles/HelpPageStyles';

function HelpPage() {
  return (
    <>
    <HelpPageStyles/>
    <Box sx={{height: '100vh', overflow: 'auto', paddingBottom: '2rem'}}>
    <Typography variant='h1' className='lilitaOne' sx={{ color: '#155360', fontSize: { xs: '1rem', sm: '2rem', md: '1.8rem' }, marginTop: { xs: '1rem', sm: '1Srem', md: '1rem' } , marginLeft: { xs: '1rem', sm: '2rem', md: '3rem' }}}>HOW TO USE?</Typography>
    <Typography variant='body1' className='help-content' sx={{ color: '#155360', fontSize: { xs: '1.3rem', sm: '2rem', md: '1.1rem' }, marginBottom: { xs: '0.4rem', sm: '2rem', md: '1.8rem' } ,marginTop: { xs: '1rem', sm: '1Srem', md: '1rem' } , marginLeft: { xs: '1rem', sm: '2rem', md: '3rem' } }}>Welcome to TODOLO, your ultimate tool for organizing tasks and categories efficiently. This guide will walk you through how to use our app's category and task features effectively, allowing you to maximize your productivity.</Typography>

    <Typography className="help-content" sx={{marginLeft: { xs: '1rem', sm: '2rem', md: '3rem' }}}>
    <h3>GETTING STARTED</h3>
    <strong>Creating an Account:</strong> If you're a new user, start by creating an account and signing up. Existing users can log in.<br/>
    <br/>

    <h3>DASHBOARD OVERVIEW</h3>
    <strong>Home Page:</strong> Understand the layout and features of the home page.<br/>
    <strong>Our Team:</strong> This page can give you an over-view of TODOLO's founders.<br/>
    <strong>Login-Button:</strong> This button on the top-right helps you to get logged in to the system.<br/>
    <strong>Profile page:</strong> On the top-right corner you can click on the icon to go to the profile page and edit details this will be avalaible once you log in.<br/>
    <br/>

    <h3>CREATING CATEGORIES</h3>
    <strong>Step 1:</strong> Enter your category on "Enter a new Category tab" button.<br/>
    <strong>Step 2:</strong> Click "Add Category+" to save your category.<br/><br/>

    <h3>MANAGING CATAGORIES</h3>
    <strong>Editing Categories:</strong> Click on the pen icon name to edit the category name.<br/>
    <strong>Deleting Categories:</strong> Click on the bin icon to delete a category.<br/><br/>

    <h3>ADDING TASKS TO CATEGORIES</h3>
    <strong>Step 1:</strong> Enter your task on "Add a new task" button.<br/>
    <strong>Step 2:</strong> Click "Add task+" to save your task.<br/><br/>

    <h3>TASK MANAGEMENT</h3>
    <strong>Editing Tasks:</strong> Click on the pen icon to edit task's details.<br/>
    <strong>Marking Tasks as Completed:</strong> Check the squared box to the left of task bar to mark it as completed.<br/>
    <strong>Deleting Tasks:</strong> Click on the bin icon to delete the task."<br/>
    </Typography>
    </Box>
    </>
  );
}

export default HelpPage;
