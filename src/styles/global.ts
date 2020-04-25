import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialised;
  }

  body, button, input {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    margin: 0 auto;
    max-width: 960px;
    padding: 40px 20px
  }

  button {
    cursor: pointer;
  }
`;
