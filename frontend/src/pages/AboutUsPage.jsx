import React, { useState } from 'react';
import { Typography } from '@mui/material';
import NiharImage from '../assets/np.jpeg';
import OjaswiniImage from '../assets/ok.jpeg';
import MuditImage from '../assets/mg.jpeg';
import LokImage from '../assets/ln.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/AboutUsPageStyles.css';

const profiles = [
  {
    name: 'Nihar Phansalkar',
    image: NiharImage,
    info: 'Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/nihar/',
    github: 'https://github.com/niharphanse',
  },
  {
    name: 'Ojaswini Kohale',
    image: OjaswiniImage,
    info: 'Certified Ethical Hacker',
    linkedin: 'https://www.linkedin.com/in/ojaswini/',
    github: 'https://github.com/ojasko',
  },
  {
    name: 'Mudit Garg',
    image: MuditImage,
    info: 'AI/ML Developer',
    linkedin: 'https://www.linkedin.com/in/muditgarg/',
    github: 'https://github.com/muditgarg07',
  },
  {
    name: 'N.N. Lokhesh',
    image: LokImage,
    info: 'Certified Cloud Architect',
    linkedin: 'https://www.linkedin.com/in/lokhesh-nidadavole/',
    github: 'https://github.com/lokheshnidadavole',
  },
];

const AboutUsPage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileClick = (profileIndex) => {
    setSelectedProfile(selectedProfile === profileIndex ? null : profileIndex);
  };
   
  return (
    <div className="centered-container">
      <Typography variant="h4" component="h2" className="team-header">
        Our Team,
        <br />
        The Minds behind TODOLO
      </Typography>
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <div
            className={`profile container_shadow ${selectedProfile === index ? 'flipped' : ''}`}
            key={index}
            onClick={() => handleProfileClick(index)}
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
  );
}

export default AboutUsPage;
