// Core
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const StyledGlobal = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    min-height: 100%;
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    font-weight: ${theme.fontWeight.regular};
  }
  
  #root {
    height: 100%;
  }
`;
