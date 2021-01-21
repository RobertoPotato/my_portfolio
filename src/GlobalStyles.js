import { createGlobalStyle } from 'styled-components';
import { xSmallDevices, mediumDevices } from './breakpoints';
import {
  lightColor,
  primaryColor,
  secondaryColor,
} from './components/constants';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: ${primaryColor};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto;
  text-align: center;
  min-width: ${xSmallDevices - 10}px;
  ::-webkit-scrollbar{
    background-color: ${primaryColor};
    width: 0.5rem;
  } 
  ::-webkit-scrollbar-thumb{
    background-color: #f64c72;
    border-radius: 10px;
    box-shadow: 20px 20px 10px ${secondaryColor};
  }
}

a {
  text-decoration: none;
  color: ${secondaryColor};
  font-weight: bold;
  transition: all 0.5s;
}

a:hover {
  color: ${lightColor};
}

h1 {
  font-family: 'Satisfy', cursive;
  font-size: 5rem;
  color: ${lightColor}; 
  
  @media (max-width: ${mediumDevices}px){
    font-size: 3.5rem;
  }

  @media (max-width: ${xSmallDevices}px){
    font-size: 2.75rem;
  }
}

h2 {
  font-size: 2rem;
  color: ${lightColor};

  @media (max-width: ${mediumDevices}px){
    font-size: 1.2rem;
  }

  @media (max-width: ${xSmallDevices}px){
    font-size: 1rem;
  }
}

h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: ${secondaryColor};

  @media (max-width: ${mediumDevices}px){
    font-size: 1.0rem;
  }

  @media (max-width: ${xSmallDevices}px){
    font-size: 0.8rem;
  }
}

p {
  color: ${lightColor};
}
`;

export default GlobalStyle;
