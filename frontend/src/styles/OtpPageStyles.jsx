import { createGlobalStyle } from 'styled-components';

const OtpPageStyles = createGlobalStyle`
  @media screen and (min-width:1000px) and (max-width: 1170px) {
    #customBoxOuter {
      width: 30vw !important;
    }
  }
  @media screen and (min-width:900px) and (max-width: 999px) {
    #customBoxOuter {
      width: 33vw !important;
    }
  }
  @media screen and (min-width:800px) and (max-width: 899px) {
    #customBoxOuter {
      width: 38vw !important;
    }
  }
  @media screen and (min-width:700px) and (max-width: 799px) {
    #customBoxOuter {
      width: 41vw !important;
    }
  }
  @media screen and (min-width:600px) and (max-width: 699px) {
    #customBoxOuter {
      width: 48vw !important;
    }
  }
  @media screen and (min-width:500px) and (max-width: 599px) {
    #customBoxOuter {
      width: 59vw !important;
    }
  }
  @media screen and (min-width:400px) and (max-width: 500px) {
    #customBoxOuter {
      width: 74vw !important;
    }
  }
  @media screen and (min-width:381px) and (max-width: 399px) {
    #customBoxOuter {
      width: 77vw !important;
    }
  }
`;

export default OtpPageStyles;
