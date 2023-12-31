import React, { useState } from 'react';
import { Typography } from '@mui/material';
import NiharImage from '../assets/nihar_photo.jpg';
import OjaswiniImage from '../assets/ojaswini_photo.jpeg';
import MuditImage from '../assets/mudit_photo.png';
import LokImage from '../assets/lokhesh_photo.jpeg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AboutUsPageStyles from '../styles/AboutUsPageStyles'; // Import your styles once

const profiles = [
  {
    name: 'Nihar Phansalkar',
    image: NiharImage,
    info: 'B.Tech CSE',
    linkedin: 'https://www.linkedin.com/in/nihar-phansalkar/',
    github: 'https://github.com/NiharPhansalkar',
  },
  {
    name: 'Ojaswini Kohale',
    image: OjaswiniImage,
    info: 'B.Tech CSE',
    linkedin: 'https://www.linkedin.com/in/ojaswini-kohale-139a96222/',
    github: 'https://github.com/OjaswiniKohale',
  },
  {
    name: 'Mudit Garg',
    image: MuditImage,
    info: 'B.Tech CSE',
    linkedin: 'https://www.linkedin.com/in/gargmudit2708/',
    github: 'https://github.com/Muditxgarg',
  },
  {
    name: 'N.N. Lokhesh',
    image: LokImage,
    info: 'B.Tech CSE',
    linkedin: 'https://www.linkedin.com/in/lokhesh-nidadavole-b45a14214/',
    github: 'https://github.com/cyberox33',
  },
];

const AboutUsPage = () => {
  return (
    <>
      <AboutUsPageStyles /> {
      <div className="centered-container">
        <Typography variant="h2" className="team-header" sx={{color:'#155360'}}>
          OUR TEAM,
        </Typography>
        <Typography variant="h4" className="team-subtitle" sx={{color:'#155360'}}>
          The Minds behind TODOLO
        </Typography>
        <div className="profiles-container">
          {profiles.map((profile, index) => (
            <div
              className={`profile container_shadow`}
              key={index}
            >
              {/* Front Content */}
              <div className="profile_content front">
                <div className="profile_name">
                  <Typography className="Name">{profile.name}</Typography>
                </div>
                <figure className="profile_image">
                  <img src={profile.image} alt={profile.name} />
                </figure>
                <div className="profile_information">
                  {profile.info}
                  <br />
                </div>
              </div>

              {/* Back Content */}
              <div className="profile_content back">
                <div className="back_icons">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="icon" />
                  </a>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
}
    </>
  );
}

export default AboutUsPage;
