import React from 'react';
import ReactDOM from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import { App } from './App';
import { StyledGlobal } from './styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Normalize />
    <StyledGlobal />
    <App />
  </React.StrictMode>
);
