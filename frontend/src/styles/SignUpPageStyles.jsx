import { createGlobalStyle } from 'styled-components';

const OtpPageStyles = createGlobalStyle`
  @media screen and (min-width:1200px) and (max-width: 1340px) {
    #customBoxOuter {
      width: 28% !important;
    }
  }
  @media screen and (min-width:1000px) and (max-width: 1199px) {
    #customBoxOuter {
      width: 33% !important;
    }
  }
  @media screen and (min-width:900px) and (max-width: 999px) {
    #customBoxOuter {
      width: 42% !important;
    }
  }
  @media screen and (min-width:800px) and (max-width: 899px) {
    #customBoxOuter {
      width: 46% !important;
    }
  }
  @media screen and (min-width:700px) and (max-width: 799px) {
    #customBoxOuter {
      width: 51% !important;
    }
  }
  @media screen and (min-width:600px) and (max-width: 699px) {
    #customBoxOuter {
      width: 60% !important;
    }
  }
  @media screen and (min-width:500px) and (max-width: 599px) {
    #customBoxOuter {
      width: 72vw !important;
      margin-top: 13%;
    }
  }
  @media screen and (min-width:400px) and (max-width: 500px) {
    #customBoxOuter {
      width: 74vw !important;
      margin-top: 13%;
    }
  }
  @media screen and (min-width:381px) and (max-width: 399px) {
    #customBoxOuter {
      width: 77vw !important;
    }
  }
  @media screen and (min-width:300px) and (max-width: 380px) {
    #customBoxOuter {
      height: 72%;
      margin-top: 21%;
    }
  }
  @media screen and (min-width:250px) and (max-width: 299px) {
    #customBoxOuter {
      width: 85vw !important;
      height: 78vh;
      margin-top: 18%;
    }
  }
`;

export default OtpPageStyles;
