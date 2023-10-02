import { createGlobalStyle } from 'styled-components';

const AboutUsPageStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

  .centered-container {
    display: relative;
    text-align: center;
    margin-top: 200px;
  }

  .team-header, .team-subtitle {
    margin-bottom: 20px;
    position: absolute;
    top: 90px; /* Adjust this value to move the header above */
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 6px;
    color: #155360;
  }

  .team-header {
    font-family: 'Lilita One', cursive;
    font-size: 60px;
    font-weight: 100;
}

  .team-subtitle {
    top: 170px;
    font-size: 30px;
    font-weight: bold;
  }

  .profiles-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: 50px;
    margin-right: 50px;
  }

  .profile {
    background-color: white;
    border-radius: 6px;
    width: calc(20% - 20px);
    margin-bottom: 20px;
    box-sizing: border-box;
    border: 7px solid #155360;
    position: relative;
  }

  .profile_name {
    line-height: 18px;
    padding: 20px;
  }

  .profile_name .Name {
    font-size: 18px;
    font-weight: bold;
  }

  .profile_information {
    font-size: 20px;
  }

  .profile_image {
    margin-top: -10px;
    clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
    height: 300px;
    overflow: hidden;
  }

  .profile_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile_content.front {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: center;
    transition: transform 0.5s;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* Back Content */
  .profile_content.back {
    transform: rotateY(0deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: center;
    transition: transform 0.1s ease-in-out, opacity 0.5s ease-in-out;
    opacity: 0;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .back_icons {
    display: flex;
    gap: 20px;
  }

  .back_icons > a > svg {
    height: 2em;
    width: 2em;
  }

  .icon {
    font-size: 36px;
    color: #155360;
  }

  .profile:hover .profile_content {
    transform: rotateY(180deg);
    cursor: default;
  }

  .profile:hover .back {
    transform: rotateY(0deg);
    opacity: 1;
  }

  @media screen and (max-width: 1300px) {
    body {
      overflow: scroll;
    }
    .profiles-container {
      flex-direction: column;
      margin: auto;
      overflow-y: scroll;
    }
    .centered-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      overflow-y: scroll;
    }
    .profile {
      width: 100%;
    }
    .team-header {
      font-size: 2.0rem;
      margin-bottom: 0;

    .team-subtitle {
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 393px) and (max-width: 600px) {
    .team-subtitle {
      top: 150px;
      font-size: 24px !important;
    }
  }

  @media screen and (max-width: 392px) {
    .team-subtitle {
      top: 150px;
      font-size: 20px !important;
    }
    .team-header {
      font-size: 1.7rem;
    }
  }
`;

export default AboutUsPageStyles;
