import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { App } from './App';
import { StyledGlobal } from './theme/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Normalize />
    <StyledGlobal />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
