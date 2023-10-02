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
  .section {
    margin: 20px 0; 
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }

  .card-content {
    transition: background-color 0.3s, box-shadow 0.3s;
    border-radius: 10px; /* Apply border-radius by default */
  }
  
  .card-content:hover {
    background-color: #f0f0f0;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export default HelpPageStyles;
