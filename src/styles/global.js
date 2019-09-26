import {
  createGlobalStyle
} from 'styled-components';

const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    font-family: sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-somoothing: antialiased !important;
  }
`;

export default GlobalStyle;
