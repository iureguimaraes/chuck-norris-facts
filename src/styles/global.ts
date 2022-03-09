import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
  }
  body, #root {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  #root {
    margin: 30px 0;
  }
  body {
    background: #E3AA05;
    -webkit-font-smoothing: antialiased !important;
    color: #222;
    font-size: 16px;
  }
`;
