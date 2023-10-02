import { createGlobalStyle } from 'styled-components';

const OtpPageStyles = createGlobalStyle`
  @media screen and (min-width:800px) and (max-width: 899px) {
    .parentContainer {
      width: 40vw !important;
    }
  }
  @media screen and (min-width:700px) and (max-width: 799px) {
    .parentContainer {
      width: 45vw !important;
    }
  }
  @media screen and (min-width:600px) and (max-width: 699px) {
    .parentContainer {
      width: 50vw !important;
    }
  }
  @media screen and (min-width:500px) and (max-width: 599px) {
    .parentContainer {
      width: 55vw !important;
    }
  }
  @media screen and (min-width:400px) and (max-width: 499px) {
    .parentContainer {
      width: 70vw !important;
    }
  }
  @media screen and (min-width:300px) and (max-width: 399px) {
    .parentContainer {
      width: 80vw !important;
    }
  }
  @media screen and (min-width:250px) and (max-width: 299px) {
    .parentContainer {
      width: 85vw !important;
    }
  }
  @media screen and (min-width: 900px) {
    .parentContainer {
      width: 30vw !important;
    }
  }
  @media screen and (max-width: 600px) {
    .parentContainer {
      margin-top: 2rem;
    }
  }
`;

export default OtpPageStyles;
