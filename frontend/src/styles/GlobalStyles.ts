import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background-color: #f8fafc;
    color: #1e293b;
    line-height: 1.6;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }
  
  input, textarea, select {
    font-family: inherit;
    outline: none;
  }
`;
