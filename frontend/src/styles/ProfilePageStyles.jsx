// Import createGlobalStyle from styled-components
import { createGlobalStyle } from 'styled-components';

// Define global styles for the profile page with responsive media queries
const ProfilePageStyles = createGlobalStyle`
  /* Media query for screens with a minimum width of 1000px */
  @media screen and (min-width: 1000px) {
    .parentContainer {
      width: 27%; // Set the width of .parentContainer
    }
  }

  /* Media query for screens with a minimum width of 900px and a maximum width of 999px */
  @media screen and (min-width: 900px) and (max-width: 999px) {
    .parentContainer {
      width: 35%; // Set the width of .parentContainer
    }
  }

  /* Media query for screens with a minimum width of 800px and a maximum width of 899px */
  @media screen and (min-width: 800px) and (max-width: 899px) {
    .parentContainer {
      width: 37%; // Set the width of .parentContainer
    }
  }

  /* Media query for screens with a minimum width of 600px and a maximum width of 799px */
  @media screen and (min-width: 600px) and (max-width: 799px) {
    .parentContainer {
      width: 45%; // Set the width of .parentContainer
    }
  }

  /* Media query for screens with a minimum width of 500px and a maximum width of 599px */
  @media screen and (min-width: 500px) and (max-width: 599px) {
    .parentContainer {
      width: 52%; // Set the width of .parentContainer
    }
  }

  /* Media query for screens with a minimum width of 400px and a maximum width of 499px */
  @media screen and (min-width: 400px) and (max-width: 499px) {
    .parentContainer {
      width: 70%; // Set the width of .parentContainer
    }
  }

  /* Media query for screens with a maximum width of 800px */
  @media screen and (max-width: 800px) {
    .parentContainer {
      margin-top: 10%; // Set the top margin of .parentContainer
    }
  }
`;

// Export the ProfilePageStyles for use in your components
export default ProfilePageStyles;
