import { createGlobalStyle } from "styled-components";

//TODO: Fix the font-family

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
`;

export default GlobalStyle;
