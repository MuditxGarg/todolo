import { createGlobalStyle } from 'styled-components';

const OtpPageStyles = createGlobalStyle`
  @media screen and (min-width:1200px) and (max-width: 1340px) {
    .parentContainer {
      width: 28% !important;
    }
  }
  @media screen and (min-width:1000px) and (max-width: 1199px) {
    .parentContainer {
      width: 33% !important;
    }
  }
  @media screen and (min-width:900px) and (max-width: 999px) {
    .parentContainer {
      width: 42% !important;
    }
  }
  @media screen and (min-width:800px) and (max-width: 899px) {
    .parentContainer {
      width: 46% !important;
    }
  }
  @media screen and (min-width:700px) and (max-width: 799px) {
    .parentContainer {
      width: 51% !important;
    }
  }
  @media screen and (min-width:600px) and (max-width: 699px) {
    .parentContainer {
      width: 60% !important;
    }
  }
  @media screen and (min-width:500px) and (max-width: 599px) {
    .parentContainer {
      width: 72vw !important;
      margin-top: 13%;
    }
  }
  @media screen and (min-width:400px) and (max-width: 500px) {
    .parentContainer {
      width: 74vw !important;
      margin-top: 13%;
    }
  }
  @media screen and (min-width:381px) and (max-width: 399px) {
    .parentContainer {
      width: 77vw !important;
      margin-top: 4rem;
    }
  }
  @media screen and (min-width:300px) and (max-width: 380px) {
    .parentContainer {
      width: 80vw !important;
      margin-top: 4rem;
    }
  }
  @media screen and (min-width:250px) and (max-width: 299px) {
    .parentContainer {
      width: 85vw !important;
      height: 78vh;
      margin-top: 18%;
    }
    .parentContainer > img {
      width: 25px !important;
      height: 25px !important;
    }
  }
`;

export default OtpPageStyles;
