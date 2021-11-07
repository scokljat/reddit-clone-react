import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
margin:0;
padding: 0;
font-family: sans-serif;
background-color: #e9a6a6;
  height: 100%;
}
*,
*:before,
*:after{
    box-sizing: border-box;
}

`;

export default GlobalStyle;
