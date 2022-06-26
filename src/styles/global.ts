import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  img {
    -webkit-user-draggit: none
  }

  .container {
    padding: 20px 0;
    max-width: 1100px;
    margin: 0 auto;
  }

  .button {
    color: #D1AB00;
    border-radius: 6px;
    background-color: #ffffff;
    padding: 16px 26px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
  }
`;

export default GlobalStyle;
