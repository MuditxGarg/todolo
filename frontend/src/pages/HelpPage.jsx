import React, { useRef, useEffect } from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import Container from '@mui/material/Container';
import HelpPageStyles from '../styles/HelpPageStyles';

function HelpPage() {
  // Define content sections with titles and content.
  const contentData = [
    {
      title: 'GETTING STARTED',
      content: (
        <div className='help-content'>
          <strong>Creating an Account:</strong> If you're a new user, start by creating an account and signing up. Existing users can log in.<br /><br />
        </div>
      ),
    },
    {
      title: 'DASHBOARD OVERVIEW',
      content: (
        <div className='help-content'>
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
        <div className='help-content'>
          <strong>Step 1:</strong> Enter your category on "Enter a new Category tab" button.<br />
          <strong>Step 2:</strong> Click "Add Category+" to save your category.<br /><br />
        </div>
      ),
    },
    {
      title: 'MANAGING CATEGORIES',
      content: (
        <div className='help-content'>
          <strong>Editing Categories:</strong> Click on the pen icon name to edit the category name.<br />
          <strong>Deleting Categories:</strong> Click on the bin icon to delete a category.<br /><br />
        </div>
      ),
    },
    {
      title: 'ADDING TASKS TO CATEGORIES',
      content: (
        <div className='help-content'>
          <strong>Step 1:</strong> Enter your task on "Add a new task" button.<br />
          <strong>Step 2:</strong> Click "Add task+" to save your task.<br /><br />
        </div>
      ),
    },
    {
      title: 'TASK MANAGEMENT',
      content: (
        <div className='help-content'>
          <strong>Editing Tasks:</strong> Click on the pen icon to edit task's details.<br />
          <strong>Marking Tasks as Completed:</strong> Check the squared box to the left of the task bar to mark it as completed.<br />
          <strong>Deleting Tasks:</strong> Click on the bin icon to delete the task."<br /><br />
        </div>
      ),
    },
  ];

  // Create a ref for card elements to adjust their height.
  const cardRef = useRef(null);

  // Use useEffect to adjust card heights.
  useEffect(() => {
    // Select all elements with the class 'card-content'.
    const cards = document.querySelectorAll('.card-content');
    const desiredCardHeight = 300; // Set your desired card height in pixels

    // Set the height of each card to the desired height.
    cards.forEach((card) => {
      card.style.height = `${desiredCardHeight}px`;
    });
  }, []);

  return (
    <Container maxWidth='lg'>
      <HelpPageStyles /> {/* Include the global styles */}
      {/* Main title */}
      <Typography variant='h2' align='center' style={{ marginTop: '10px', marginBottom: '10px', color: '#155360' }} className="lilitaOne">
        HOW TO USE?
      </Typography>
      {/* Subtitle */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '15px' }}>
        <Typography variant='subtitle' align='center' style={{ maxWidth: '1500px' }} className="lilitaOne">
          <em>"If you want to make good use of your time, you've got to know what's most important and then give it all you've got." - Lee Iacocca</em>
        </Typography>
      </div>
      {/* Description */}
      <Typography variant='h6' align='center' style={{margin: '0 auto', maxWidth: '1000px', marginBottom: '20px' }}>
        This guide will walk you through how to use our app's category and task features effectively, allowing you to maximize your productivity.
      </Typography>
      {/* Content grid */}
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        {contentData.map((section, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ marginBottom: '1rem' }}>
              <CardContent className="card-content">
                {/* Section title */}
                <Typography variant='h5' gutterBottom style={{color: '#155360' }} className="lilitaOne" >
                  {section.title}
                </Typography>
                {/* Content */}
                <div style={{ textAlign: 'justify' }}>
                  {/* Wrap the content (excluding the title) in a div */}
                  {section.content}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HelpPage;
