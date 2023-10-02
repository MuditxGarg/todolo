import { createGlobalStyle } from 'styled-components';

const ProfilePageStyles = createGlobalStyle`
  @media screen and (min-width: 1000px) {
    .parentContainer {
      width: 27%;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 999px) {
    .parentContainer {
      width: 35%;
    }
  }
  @media screen and (min-width: 800px) and (max-width: 899px) {
    .parentContainer {
      width: 37%;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 799px) {
    .parentContainer {
      width: 45%;
    }
  }
  @media screen and (min-width: 500px) and (max-width: 599px) {
    .parentContainer {
      width: 52%;
    }
  }
  @media screen and (min-width: 400px) and (max-width: 499px) {
    .parentContainer {
      width: 70%;
    }
  }
  @media screen and (min-width: 300px) and (max-width: 399px) {
    .parentContainer {
      width: 85%;
    }
  }
  @media screen and (min-width: 250px) and (max-width: 299px) {
    .parentContainer {
      width: 90%;
    }
  }
  @media screen and (max-width: 800px) {
    .parentContainer {
      margin-top: 10%;
    }
  }
`;

export default ProfilePageStyles;
