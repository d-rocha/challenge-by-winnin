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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-somoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
