import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system'; // Import styled from @mui/system
import HelpPageStyles from '../styles/HelpPageStyles';

// Define a styled Card component using @mui/system
// Define a styled Card component using @mui/system
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Add a boxShadow for the shadow effect
  border: '2px solid #155360',
}));


function HelpPage() {
  return (
    <>
      <HelpPageStyles />
      <Box sx={{ height: '100vh', overflow: 'auto', paddingBottom: '2rem' }}>
        <Typography variant='h1' className='lilitaOne' sx={{ color: '#155360', fontSize: { xs: '1rem', sm: '2rem', md: '1.8rem' }, marginTop: { xs: '1rem', sm: '1Srem', md: '1rem' }, marginLeft: { xs: '1rem', sm: '2rem', md: '3rem' }, textAlign: 'center'}}>HOW TO USE?</Typography>
        <Typography variant='body1' className='help-content' sx={{ color: '#155360', fontSize: { xs: '1.3rem', sm: '2rem', md: '1.1rem' }, marginBottom: { xs: '0.4rem', sm: '2rem', md: '1.8rem' }, marginTop: { xs: '1rem', sm: '1Srem', md: '1rem' }, marginLeft: { xs: '1rem', sm: '2rem', md: '3rem' } }}>Welcome to TODOLO, your ultimate tool for organizing tasks and categories efficiently. This guide will walk you through how to use our app's category and task features effectively, allowing you to maximize your productivity.</Typography>

        <Grid container spacing={4}>
          {[
            {
              title: 'GETTING STARTED',
              content: (
                <div>
                  <strong>Creating an Account:</strong> If you're a new user, start by creating an account and signing up. Existing users can log in.<br /><br />
                </div>
              ),
            },
            {
              title: 'DASHBOARD OVERVIEW',
              content: (
                <div>
                  <strong>Home Page:</strong> Understand the layout and features of the home page.<br />
                  <strong>Our Team:</strong> This page can give you an overview of TODOLO's founders.<br />
                  <strong>Login-Button:</strong> This button on the top-right helps you to get logged in to the system.<br />
                  <strong>Profile page:</strong> On the top-right corner you can click on the icon to go to the profile page and edit details this will be available once you log in.<br /><br />
                </div>
              ),
            },
            {
              title: 'CREATING CATEGORIES',
              content: (
                <div>
                  <strong>Step 1:</strong> Enter your category on "Enter a new Category tab" button.<br />
                  <strong>Step 2:</strong> Click "Add Category+" to save your category.<br /><br />
                </div>
              ),
            },
            {
              title: 'MANAGING CATEGORIES',
              content: (
                <div>
                  <strong>Editing Categories:</strong> Click on the pen icon name to edit the category name.<br />
                  <strong>Deleting Categories:</strong> Click on the bin icon to delete a category.<br /><br />
                </div>
              ),
            },
            {
              title: 'ADDING TASKS TO CATEGORIES',
              content: (
                <div>
                  <strong>Step 1:</strong> Enter your task on "Add a new task" button.<br />
                  <strong>Step 2:</strong> Click "Add task+" to save your task.<br /><br />
                </div>
              ),
            },
            {
              title: 'TASK MANAGEMENT',
              content: (
                <div>
                  <strong>Editing Tasks:</strong> Click on the pen icon to edit task's details.<br />
                  <strong>Marking Tasks as Completed:</strong> Check the squared box to the left of the task bar to mark it as completed.<br />
                  <strong>Deleting Tasks:</strong> Click on the bin icon to delete the task."<br /><br />
                </div>
              ),
            },
          ].map((section, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <StyledCard>
                <CardContent>
                  <Typography variant='h3' className='lilitaOne' sx={{ color: '#155360', fontSize: { xs: '1rem', sm: '2rem', md: '1.4rem', textAlign: 'center', marginBottom: '0.8rem',}}}>{section.title}</Typography>
                  {section.content}
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default HelpPage;
