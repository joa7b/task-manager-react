import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, #root {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #202635;
    height: 100vh;
    width: 100vw;

    font-family: 'Mulish', sans-serif;
  }
`;
