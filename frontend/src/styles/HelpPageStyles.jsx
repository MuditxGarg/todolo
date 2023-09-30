import { createGlobalStyle } from 'styled-components';

const HelpPageStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

  .help-content {
    color: #155360;
		font-family: 'Inter', sans-serif;
  }
  .lilitaOne {
    font-family: 'Lilita One', cursive;
  }

  .help-content h3{
    font-family: 'Lilita One', cursive;
    color: #155360;
    font-weight: 200;
  }

`;

export default HelpPageStyles;