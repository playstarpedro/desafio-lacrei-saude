import { createGlobalStyle } from "styled-components";

import { Nunito } from 'next/font/google';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
  }
`;

export default GlobalStyle;
