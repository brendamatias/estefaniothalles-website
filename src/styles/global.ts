import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
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

  hr {
    border: 1px solid #FFF1B4;
    background-color: #FFF1B4;
    width: 100%;
    margin: 0 auto;
  }

  .container {
    padding: 20px 0;
    max-width: 1100px;
    margin: 0 auto;
  }

  .button {
    border-radius: 6px;
    padding: 16px 30px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
    background-color: #D1AB00;
    letter-spacing: 1px;

    &.light {
      color: #D1AB00;
      background-color: #ffffff;
    }
  }

  .title-section {
    display: flex;
    align-items: center;
    gap: 15px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #D1AB00;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;

    svg {
      font-size: 24px;
    }
  }
`;

export default GlobalStyle;
